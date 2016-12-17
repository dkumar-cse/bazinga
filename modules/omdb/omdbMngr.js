
'use strict';
var redis = require('redis');
var Q = require('q');
var _ = require('lodash');
var omdbServices = require('./omdbServices');
var movieDetailsJson = require('../../resources/movieDetailsJson');
var tokenJson = require('../../resources/tokenJson');

var client = redis.createClient();

var omdbManager = module.exports;


omdbManager.getFromCache = function (key) {
    var deffered = Q.defer();
    client.get(key, function(err, reply) {
        deffered.resolve(reply);
    });

    return deffered.promise;
};

omdbManager.setInCache = function (key, value) {
    client.set(key, value);
    return true;
};

omdbManager.validImdb = function (imdbId) {
    return true;
};


omdbManager.getDirectorsJson = function (directorsNameString) {
    directorsNameString = "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)";
    var directorsArray = directorsNameString.split(",");
    var directors = [];
    _.each(directorsArray, function (key, value, directorsArray) {
        directors = directors.concat({name : key});
    });

    return directors;
};

omdbManager.getWritersJson = function (writersNameString) {
    var writersArray = writersNameString.split(",");
    var writers = [];
    _.each(writersArray, function (key, value, writersArray) {
        writers = writers.concat({name : key});
    });

    return writers;
};

omdbManager.getCastsJson = function (castsName) {
    var castsArray = castsName.split(',');
    var res = {};
    _.each(castsArray, function (key, value, castsArray) {
        res = _.merge(res, value);
    });

    return res;
};

omdbManager.getMovieDetails = function (imdbId) {
    var deffered = Q.defer();
    omdbServices.getMovieByIdAndTitle(imdbId, null, null).then(function(response) {
        var movieResult = new movieDetailsJson();

        /*
         * Set movieResult Values
         *
         */

        movieResult.setYear(response.Year);
        movieResult.setAwardInfo(response.Awards);
        movieResult.setImdbRating(response.imdbRating);
        movieResult.setImdbVotes(response.imdbVotes);
        movieResult.setPlot(response.Plot);

        movieResult.addDirector(omdbManager.getDirectorsJson(response.Director));
        movieResult.setWriters(omdbManager.getWritersJson(response.Writer));
        movieResult.setCasts(omdbManager.getCastsJson(response.Actors));
        movieResult.addImage(response.Poster);

        movieResult.setTomatoMeter(response.tomatoMeter);
        movieResult.setTomatoRating(response.tomatoRating);
        movieResult.setTomatoReviews(response.tomatoReviews);
        movieResult.setTomatoFresh(response.tomatoFresh);
        movieResult.setTomatoRotten(response.tomatoRotten);
        movieResult.setTomatoConsensus(response.tomatoConsensus);
        movieResult.setTomatoUserMeter(response.tomatoUserMeter);
        movieResult.setTomatoUserRating(response.tomatoUserRating);
        movieResult.setTomatoUserReviews(response.tomatoUserReviews);
        movieResult.setTomatoURL(response.tomatoURL);

        deffered.resolve(movieResult);

    });

    return deffered.promise;
};

module.exports = omdbManager;
