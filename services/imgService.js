/**
 * @author : DivyaKumar
 * @date : 04 JAN 2014
 * @info :  Service to process image
 *
 */

var fse = require('fs-extra');
var Q = require('q');
var sharp = require("sharp");
var tmdbMngr = require('../modules/tmdb/tmdbMngr');
var image_downloader = require('image-downloader');
var pic_root_location = process.env.ImgLocation;
var localOrigingalImgLocation = pic_root_location + "/x/o/p";

imgService = module.exports;

imgService.getCDNUrl = function(imgUrl) {
    return process.env.CDNImgUrl +"?u="+ imgUrl;
};

imgService.downloadImage = function(imgUrl, location) {
    var deffered = Q.defer();
    var imgTmdbUrl = tmdbMngr.generateImageUrl(imgUrl);
    var localOrigingalImgPath = location + imgUrl;

    imgService.checkOrCreate(location).then(function(result) {
        if(result.msg==="folder_created" || result.msg==="folder_present") {
            console.log("Original Pics Directory created successfully!");
            var opt = {
                url: imgTmdbUrl,
                dest: localOrigingalImgPath,
                done: function(err, filename, image) {
                    if (err) {console.log(6);
                        deffered.resolve({res_code:"error"});
                        throw err;
                    }

                    console.log('File saved to', filename);
                    deffered.resolve({res_code:"downloaded"});
                },
            };
            image_downloader(opt);
        }
    });

    return deffered.promise;

};

imgService.checkOrCreate = function(location) {
    var deffered = Q.defer();
    if (!fse.existsSync(location)){
        fse.mkdirs(location,function(err){
           if (err) {
              console.log(err);
              return console.error(err);
           }
           console.log("Directory created successfully!");
           deffered.resolve({msg:"folder_created"});
        });
    } else {
        deffered.resolve({msg:"folder_present"});
    }

    return deffered.promise;
};

imgService.checkAndPersist = function(imgUrl) {
    var deffered = Q.defer();
    var imgTmdbUrl = tmdbMngr.generateImageUrl(imgUrl);
    var localOrigingalImgPath = localOrigingalImgLocation + imgUrl;
    if(fse.existsSync(localOrigingalImgPath)) {
        deffered.resolve({res_code:"exists"});
    } else {
        imgService.downloadImage(imgUrl, localOrigingalImgLocation).then(function(result){
            if(result.res_code === "downloaded") {
                deffered.resolve({res_code:"downloaded"});
            } else {
                deffered.resolve({res_code:"error"});
            }

        });
    }
    return deffered.promise;
};

imgService.reScale = function(localOrigingalImgPath, location, imgUrl, options) {
    var localImgPath = location + imgUrl;
    var deffered = Q.defer();
    imgService.checkOrCreate(location).then(function(result) {
        if(result.msg==="folder_created" || result.msg==="folder_present") {
            console.log("Pic specific Directory created successfully!");
            console.log(options.width);
            if(options.width==="o" && options.height === "p"){console.log(options.width);
                deffered.resolve({path:localOrigingalImgPath});
            } else {console.log(options.height);
                if(options.preserveAspect===1) {
                    sharp(localOrigingalImgPath)
                      .resize(parseInt(options.width), parseInt(options.height))
                      .embed()
                      .toFile(localImgPath, function(err, info) {
                        console.log('File resizing to', localImgPath);
                        deffered.resolve({path:localImgPath});
                      });
                } else {
                    // crop by default
                    sharp(localOrigingalImgPath)
                      .resize(parseInt(options.width), parseInt(options.height))
                      .toFile(localImgPath, function(err, info) {
                        console.log('File resizing to', localImgPath);
                        deffered.resolve({path:localImgPath});
                      });
                }
            }

        }
    });

    return deffered.promise;
};

var getImageFileLocation = function(options) {
    var width = options.width;
    var height = options.height;

    var location = pic_root_location + "/x/" + width + "/" + height;
    if(options.preserveAspect===1) {
        location = location + "/aspect";
    } else if(options.crop===1 && width!=='o' && height!=='p'){
        // default -> put in crop folder
        location = location + "/crop";
    }
    return location;
};

imgService.getImage = function(imgUrl, options, res) {
    var width = options.width;
    var height = options.height;
    var location = getImageFileLocation(options);

    var localImgPath = location + imgUrl;

    if (fse.existsSync(localImgPath)) {
        res.sendFile(localImgPath);
    } else {
        // check for original image
        var localOrigingalImgPath = localOrigingalImgLocation + imgUrl;

        imgService.checkAndPersist(imgUrl).then(function(result) {
            if(result.res_code==="exists" || result.res_code==="downloaded") {
                imgService.reScale(localOrigingalImgPath, location, imgUrl, options).then(function(reScaleResult) {
                    if(reScaleResult.err) {
                        res.json({err:"error in while getting image"});
                    } else {
                        res.sendFile(reScaleResult.path);
                    }
                });
            } else {
                res.json({msg:"some problem occured"});
            }

        });
    }
};

module.exports = imgService;
