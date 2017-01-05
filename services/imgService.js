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

imgService.downloadImage = function(imgUrl, location) {
    var deffered = Q.defer();
    var imgTmdbUrl = tmdbMngr.generateImageUrl(imgUrl);
    var localOrigingalImgPath = location + imgUrl;
console.log(localOrigingalImgPath);
console.log(imgUrl);
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

imgService.checkOrCreate = function(location) {console.log(location);
    var deffered = Q.defer();
    if (!fse.existsSync(location)){
        fse.mkdirs(location,function(err){
           if (err) {
               console.log("ccc");
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
    imgService.checkOrCreate(location).then(function(result) {console.log(result);
        if(result.msg==="folder_created" || result.msg==="folder_present") {
            console.log("Pic specific Directory created successfully!");
            sharp(localOrigingalImgPath)
              .resize(parseInt(options.width), parseInt(options.height))
              .toFile(localImgPath, function(err, info) {
                console.log('File resizing to', localImgPath);
                deffered.resolve({path:localImgPath});
              });
        }
    });

      return deffered.promise;
};

imgService.getImage = function(imgUrl, options, res) {console.log(1);console.log(imgUrl);
    var width = options.width;
    var height = options.height;
    var location = pic_root_location + "/x/" + width + "/" + height;
    var localImgPath = location + imgUrl;
console.log(localImgPath);
    if (fse.existsSync(localImgPath)) {console.log(2);
        res.sendFile(localImgPath);
    } else {console.log(3);
        // check for original image
        var localOrigingalImgPath = localOrigingalImgLocation + imgUrl;

        imgService.checkAndPersist(imgUrl).then(function(result) {console.log("11");
            if(result.res_code==="exists" || result.res_code==="downloaded") {console.log("11");
                imgService.reScale(localOrigingalImgPath, location, imgUrl, options).then(function(reSizedImg) {
                    res.sendFile(reSizedImg.path);
                });
            } else {
                res.json({msg:"some problem occured"});
            }

        });
    }
};

module.exports = imgService;
