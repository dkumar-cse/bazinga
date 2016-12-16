/**
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info :
 *
 */
var request = require('request');
var iwnServices = require('../modules/iwn/iwnServices');
var omdbServices = require('../modules/omdb/omdbServices');
var tmdbSearchServices = require('../modules/tmdb/tmdbSearchServices');
var tmdbMovieServices = require('../modules/tmdb/tmdbMovieServices');
var movieDetailsJson = require('../resources/movieDetailsJson');
var redis = require('redis');

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


//module.exports = movies;
