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
var cacheManager = require('../modules/cache/cacheManager');
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

movies.getMovieFromID = function(movieId) {
    var cacheKey = "movieIfd_" + movieId;
    var deffered = Q.defer();

    cacheManager.get(cacheKey).then(function(cacheResult){
        if(cacheResult  === null) {
            mongoServices.getMovieFromCollection(movieId).then(function (result) {
                if(movies.checkForHalfResult(result)===true) {
                    var tmdbId = result.tmdbId;
                    tmdbMngr.getMovieDetails(tmdbId).then(function(tmdbResponse) {
                        // var imdbId = tmdbResponse.imdbId;
                        // omdbMngr.getMovieDetails(imdbId).then(function(omdbResponse) {
                        //     var response = _.mergeWith(tmdbResponse, omdbResponse, customizer);
                        //     response.id = result._id;
                        //     response._id = result._id;
                        //     mongoServices.updateMovieInCollection(response).then(function(result){
                        //         res.json(result);
                        //     });
                        // });
                        var response = tmdbResponse;
                        response.id = result._id;
                        response._id = result._id;
                        mongoServices.updateMovieInCollection(response).then(function(result){
                            deffered.resolve(result);
                        });
                    });
                } else {
                    cacheManager.set(cacheKey, JSON.stringify(result)).then(function(cacheSetResult) {
                        deffered.resolve({res:"got from DB", result: result });
                    });
                }
            });
        } else {
            deffered.resolve({res:"got from CACHE", result: JSON.parse(cacheResult) });
        }
    });
    return deffered.promise;
};


movies.getMovieByID = function(req, res) {
    var movieId = req.query.id;
    var cacheKey = "movieIfd_" + movieId;

    cacheManager.get(cacheKey).then(function(cacheResult){
        console.log((cacheResult));
        if(cacheResult  === null) {console.log("here");
            mongoServices.getMovieFromCollection(movieId).then(function (result) {
                if(movies.checkForHalfResult(result)===true) {
                    var tmdbId = result.tmdbId;
                    tmdbMngr.getMovieDetails(tmdbId).then(function(tmdbResponse) {
                        // var imdbId = tmdbResponse.imdbId;
                        // omdbMngr.getMovieDetails(imdbId).then(function(omdbResponse) {
                        //     var response = _.mergeWith(tmdbResponse, omdbResponse, customizer);
                        //     response.id = result._id;
                        //     response._id = result._id;
                        //     mongoServices.updateMovieInCollection(response).then(function(result){
                        //         res.json(result);
                        //     });
                        // });
                        var response = tmdbResponse;
                        response.id = result._id;
                        response._id = result._id;
                        mongoServices.updateMovieInCollection(response).then(function(result){
                            res.json(result);
                        });
                    });
                } else {
                    cacheManager.set(cacheKey, JSON.stringify(result)).then(function(cacheSetResult) {console.log(cacheSetResult);
                        res.json({res:"got from DB", result: result });
                    });
                }
            });
        } else {console.log("there");
            console.log((cacheResult));
            res.json({res:"got from CACHE", result: JSON.parse(cacheResult) });
        }
    });

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

    var cacheKey = "seearch_" + queryString;

    cacheManager.get(cacheKey).then(function (cacheGetResult) {
        if(cacheGetResult === null) {
            tmdbSearchServices.searchMovie(queryString, pageNo, includeAdult, region, year, null).then(function(result) {
                var searchSnippets = result.results;
                movies.processForOwnSnippets(searchSnippets).then(function(finalResult) {
                    cacheManager.set(cacheKey, JSON.stringify(finalResult)).then(function(cacheSetResult) {
                        res.json({
                            res : "succeded - got from TMDB",
                            result : finalResult
                        });
                    });

                });
            });
        } else {
            res.json({
                res : "succeded - got from CACHE",
                result : JSON.parse(cacheGetResult)
            });
        }
    });
};


// tmdbMngr.getMovieDetails('tt0372784').then(function(response) {
//     console.log(response);
// });

// omdbMngr.getMovieDetails('tt0372784').then(function(response) {
//     console.log(response);
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

var manipulateEachCast = function(casts) {
    for(var i=0;i<casts.length;i++) {
        if(!_.isNull(casts[i].profile_path) && casts[i].profile_path!==null){
            casts[i].profile_path = tmdbMngr.generateImageUrl(casts[i].profile_path);
        }else{
            casts[i].profile_path = "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png";
        }
    }
    return casts;
};
var manipulateEachCrew = function(crew) {
    for(var i=0;i<crew.length;i++) {
        if(!_.isNull(crew[i].profile_path) && crew[i].profile_path!==null){
            crew[i].profile_path = tmdbMngr.generateImageUrl(crew[i].profile_path);
        }else{
            crew[i].profile_path = "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png";
        }
    }
    return crew;
};

movies.getMovieCasts = function(req, res) {
    var movieId = req.query.id;
    mongoServices.getMovieCasts(movieId).then(function(result) {
        if(result.length === 0) {
            movies.getTmdbMovieIdFromMovieId(movieId).then(function(tmdbId) {
                tmdbMngr.getMovieCasts(tmdbId).then(function(casts){
                    mongoServices.saveTmdbMovieCasts(movieId, casts).then(function(castsResult) {
                        castsResult.casts = manipulateEachCast(castsResult.casts);
                        castsResult.crew = manipulateEachCrew(castsResult.crew);
                        res.json(castsResult);
                    });
                });
            });
        } else {
            var castsResult = result[0];
            castsResult.casts = manipulateEachCast(castsResult.casts);
            castsResult.crew = manipulateEachCrew(castsResult.crew);
            res.json(castsResult);
        }
    });
};

movies.getMovieRatingsAndReviews = function(req, res) {
    var movieId = req.query.id;
    movies.getMovieFromID(movieId).then(function (movieResult) {
        movieGoogler.getMovieInfoFromGoogle(movieResult.result.title).then(function(googleResult) {
                res.json(googleResult);
        });
    });
};

module.exports = movies;



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
