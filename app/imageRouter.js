//  Routes

/**
 * @author : DivyaKumar
 * @date : 4 Jan 2017
 * @info : Image Routes
 *
 */

var express = require("express");
var router = express.Router();
var imgService = require('../services/imgService');



/*
    image URL should be of type

*/

router.get('/resize', function(req, res) {console.log("jjj");
console.log(req.query);
    var imgUrl = req.query.url;
    var options = {};
    options.width = req.query.w;
    options.height = req.query.h;
    imgService.getImage(imgUrl, options, res);
});


    // imgService.getMovieCasts(req, res);
  //   sharp('/Users/dkumar8/reviewSite/bazinga/app/input.png')
  // .resize(200, 300)
  // .embed()
  // .toFormat(sharp.format.png)
  // .toBuffer(function(err, outputBuffer) {
  //   if (err) {
  //     throw err;
  // }else{
  //     res.json(outputBuffer);
  // }
  //   // outputBuffer contains WebP image data of a 200 pixels wide and 300 pixels high
  //   // containing a scaled version, embedded on a transparent canvas, of input.gif
  // });




module.exports = router;
