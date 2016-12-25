/**
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info :
 *
 */
var request = require('request');
var _ = require('lodash');
var Q = require('q');
var iwnServices = require('../modules/iwn/iwnServices');
var omdbServices = require('../modules/omdb/omdbServices');
var tmdbSearchServices = require('../modules/tmdb/tmdbSearchServices');
var tmdbMovieServices = require('../modules/tmdb/tmdbMovieServices');
var tmdbMngr = require('../modules/tmdb/tmdbMngr');
var omdbMngr = require('../modules/omdb/omdbMngr');
var movieDetailsJson = require('../resources/movieDetailsJson');
var redis = require('redis');

var movieGoogler = require('../modules/googleSearch/movieGoogler');

var movies = module.exports;


// movieGoogler.searchMovie("befikre").then(function(response) {
//     console.log(response);
// });
var customizer = function (objValue, srcValue) {

  if (_.isNull(objValue) || objValue=="") {
    return srcValue;
    } else {
        return objValue;
    }
};

movies.getMovieByID = function(req, res) {
    var id = req.query.id;
    var deffered = Q.defer();
    tmdbMngr.getMovieDetails(id).then(function(tmdbResponse) {
        var imdbId = tmdbResponse.imdbId;
        omdbMngr.getMovieDetails(imdbId).then(function(omdbResponse) {

            var response = _.mergeWith(tmdbResponse, omdbResponse, customizer);
            res.json(response);
        });
    });
};


movies.searchMovie = function(req, res) {
    // get all params
    var queryString = req.query.q;
    var includeAdult = true; // req.query.ia;
    var pageNo = req.query.pg;
    // var region = req.query.rg;
    var year = req.query.yr;
    // var primaryReleaseYear = req.query.pry;

    omdbServices.searchMovie(queryString, year, pageNo).then(function(result) {
        res.json(result);
    });

};


// tmdbMngr.getMovieDetails('tt0372784').then(function(response) {
//     console.log(response);
// });

// omdbMngr.getMovieDetails('tt0372784').then(function(response) {
//     console.log(response);
// });

// client = redis.createClient();
// client.get('asd', function(err, reply) {
//     console.log(reply);
// });
//
// client.set('asd', 'xxxx');
//
// client.get('asd', function(err, reply) {
//     console.log(reply);
// });



// var as = new movieDetailsJson();
// as.addGenre({18 : "Action"});
// as.setTieRating(3);
// console.log(as);

//var movies = function(req, res) {
//    var searchText = req.query.q;
//    iwnServices.getSearchResult(searchText).then(function(result) {
//	res.json(result);
//    });
//}

//var movies = function(req, res) {
//    var searchText = req.query.q;
//    var id = req.query.id;
//    var title = req.query.title;
//    omdbServices.getMovieByIdAndTitle(id, title, null).then(function(result) {
//	res.json(result);
//    });
//}

//var movies = function(req, res) {
//    var searchText = req.query.q;
//    tmdbSearchServices.searchMovie(searchText).then(function(result) {
//	res.json(result);
//    });
//}

// var movies = function(req, res) {
//     var searchText = req.query.q;
//     tmdbMovieServices.getMovieDetails(searchText).then(function(result) {
// 	res.json(result);
//     });
// }


module.exports = movies;
