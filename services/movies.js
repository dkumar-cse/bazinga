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
var mongoServices = require('../modules/mongo/mongoServices');
var tmdbMngr = require('../modules/tmdb/tmdbMngr');
var omdbMngr = require('../modules/omdb/omdbMngr');
var movieDetailsJson = require('../resources/movieDetailsJson');
var redis = require('redis');
var async = require('async');

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

movies.checkForHalfResult = function(movieJson) {
    // check if movieJson is half and we have to make tmdb api callback
    if(_.isNull(movieJson.title) || movieJson.title==="null") {
        return true; // empty
    }
    return false;
};

movies.getMovieByID = function(req, res) {
    var movieId = req.query.id;
    // tmdbMngr.getMovieCasts(id).then(function(response){
    //     res.json(response);
    // });

    mongoServices.getMovieFromCollection(movieId).then(function (result) {
        if(movies.checkForHalfResult(result)===true) {
            var tmdbId = result.tmdbId;
            tmdbMngr.getMovieDetails(tmdbId).then(function(tmdbResponse) {
                var imdbId = tmdbResponse.imdbId;
                omdbMngr.getMovieDetails(imdbId).then(function(omdbResponse) {
                    var response = _.mergeWith(tmdbResponse, omdbResponse, customizer);
                    response.id = result._id;
                    response._id = result._id;
                    mongoServices.updateMovieInCollection(response).then(function(result){
                        res.json(result);
                    });
                });
            });
        } else {
            res.json({res:"got from DB", result: result });
        }
    });
    // tmdbMovieServices.getMoviesCasts(id).then(function(result) {
    //     res.json(result);
    // });

    // tmdbMngr.getMovieDetails(id).then(function(tmdbResponse) {
    //     var imdbId = tmdbResponse.imdbId;
    //     omdbMngr.getMovieDetails(imdbId).then(function(omdbResponse) {
    //         var response = _.mergeWith(tmdbResponse, omdbResponse, customizer);
    //         mongoServices.saveMovieInCollection(response).then(function(result){
    //             res.json(response);
    //         });
    //     });
    // });


    // mongoServices.getMovieFromCollection(id).then(function(result){
    //     res.json(result);
    // });


    // tmdbMngr.getMovieDetails(id).then(function(tmdbResponse) {
    //     var imdbId = tmdbResponse.imdbId;
    //     omdbMngr.getMovieDetails(imdbId).then(function(omdbResponse) {
    //
    //         var response = _.mergeWith(tmdbResponse, omdbResponse, customizer);
    //         res.json(response);
    //     });
    //
    // });


};

movies.mergeIn = function (a1, a2) {
    var deffered = Q.defer();
    a1.push(a2);
    deffered.resolve(a1);

    return deffered.promise;

};


movies.saveMovieSnipInCollection = function(searchSnippet) {
    var deffered = Q.defer();
    var movieJson = new movieDetailsJson();
    movieJson.setTmdbId(searchSnippet.id);
    mongoServices.findByTmdbId(searchSnippet.id).then(function(movieResultByTmdbId) {
        if(_.isNull(movieResultByTmdbId) || movieResultByTmdbId===null || (movieResultByTmdbId.length === 0)) {
            mongoServices.saveMovieInCollection(movieJson).then(function (mongoResult){
                movieJson.setId(mongoResult.id);
                movieJson._id = mongoResult.id;
                deffered.resolve(movieJson);
            });
        } else {
            movieJson.setId(movieResultByTmdbId._id);
            movieJson._id = movieResultByTmdbId._id;
            deffered.resolve(movieJson);
        }
    });
    return(deffered.promise);
};

movies.processForOwnSnippets = function (searchSnippets) {
    var searchSnippetsResult = [];
    var deffered = Q.defer();

    async.each(searchSnippets, function(searchSnippet, callback) {
        movies.saveMovieSnipInCollection(searchSnippet).then(function(savedSearchSnip){
            searchSnippet.tmdbId = searchSnippet.id;
            searchSnippet.id = savedSearchSnip._id;
            searchSnippet.poster_path = tmdbMngr.generateImageUrl(searchSnippet.poster_path);
            searchSnippet.backdrop_path = tmdbMngr.generateImageUrl(searchSnippet.backdrop_path);
            movies.mergeIn(searchSnippetsResult, searchSnippet).then(function(){
                callback();
            });
        });
    }, function(err) {
        if( err ) {
          console.log('ERROR : ' + err);
        } else {
            deffered.resolve(searchSnippetsResult);
        }
    });
    return deffered.promise;
};


movies.searchMovie = function(req, res) {
    // get all params
    var queryString = req.query.q;
    var includeAdult = true; // req.query.ia;
    var pageNo = req.query.pg;
    var region = req.query.rg;
    var year = req.query.yr;
    // var primaryReleaseYear = req.query.pry;

    tmdbSearchServices.searchMovie(queryString, pageNo, includeAdult, region, year, null).then(function(result) {
        var searchSnippets = result.results;
        movies.processForOwnSnippets(searchSnippets).then(function(finalResult) {
            res.json({
                res : "succeded",
                result : finalResult
            });
        });
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

movies.getTmdbMovieIdFromMovieId = function (movieId) {
    var deffered = Q.defer();
    mongoServices.getMovieFromCollection(movieId).then(function (movieJson) {
        var tmdbId = movieJson.tmdbId;
        deffered.resolve(tmdbId);
    });
    return deffered.promise;
};

movies.getMovieCasts = function(req, res) {
    var movieId = req.query.id;
    mongoServices.getMovieCasts(movieId).then(function(result) {
        if(result.length === 0) {
            movies.getTmdbMovieIdFromMovieId(movieId).then(function(tmdbId) {
                tmdbMngr.getMovieCasts(tmdbId).then(function(casts){
                    mongoServices.saveTmdbMovieCasts(movieId, casts).then(function(castsResult) {
                        res.json(castsResult);
                    });
                });
            });
        } else {
            res.json(result[0]);
        }
    });
};

module.exports = movies;
