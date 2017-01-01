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
var movieGoogler = require('../modules/googleSearch/movieGoogler');

router.get('/movie/casts', function(req, res) {
    movies.getMovieCasts(req, res);
});

router.get('/movie/ratrev', function(req, res) {
    movies.getMovieRatingsAndReviews(req, res);
});

router.get('/movie/googleresult', function(req, res) {
    movies.getMovieFromID(req.query.id).then(function (movieResult) {
        movieGoogler.searchMovie(movieResult.result.title).then(function(result) {
            res.json(result);
        });
    });
});

router.get('/movie', function(req, res) {
    movies.getMovieByID(req, res);
});

router.get('/search', function(req, res) {
    movies.searchMovie(req, res);
});


module.exports = router;
