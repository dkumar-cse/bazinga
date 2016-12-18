//  Routes

/**
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info : Routes
 *
 */

var express = require("express");
var router = express.Router();

var movies = require('../services/movies');

router.get('/', function(req, res) {
    movies(req, res);
});


module.exports = router;
