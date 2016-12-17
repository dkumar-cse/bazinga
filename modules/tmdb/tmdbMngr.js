
'use strict';
var redis = require('redis');
var Q = require('q');
var _ = require('lodash');
var tmdbMovieServices = require('./tmdbMovieServices');
var movieDetailsJson = require('../../resources/movieDetailsJson');
var tokenJson = require('../../resources/tokenJson');

var client = redis.createClient();

var tmdbMngr = module.exports;


tmdbMngr.getFromCache = function (key) {
    var deffered = Q.defer();
    client.get(key, function(err, reply) {
        deffered.resolve(reply);
    });

    return deffered.promise;
};

tmdbMngr.setInCache = function (key, value) {
    client.set(key, value);
    return true;
};

tmdbMngr.validImdb = function (imdbId) {
    return true;
};

tmdbMngr.checkAdult = function (x) {
    return true;
};

tmdbMngr.tokenIdToTmdbTokenId = function (tokenId) {
    var tmdbGenreId = tmdbMngr.getFromCache('tokenToTmdbToken_' + tokenId);
    return tmdbGenreId;
};

tmdbMngr.tmdbTokenIdToTokenId = function (tmdbTokenId) {
    var tokenId = tmdbMngr.getFromCache('tmdbTokenToToken_' + tmdbTokenId);
    return "tokenId";
};

tmdbMngr.generateImageUrl = function (path) {
    var imageUrl = "http:\/\/image.tmdb.org/t/p/original" + path;
    return imageUrl;
};

tmdbMngr.getMovieDetails = function (movieId) {
    var deffered = Q.defer();
    tmdbMovieServices.getMovieDetails(movieId).then(function(response) {
        var movieResult = new movieDetailsJson();
        movieResult.setId("Id - default");

        /*
         * Set movieResult Values
         *
         */console.log(tmdbMngr.generateImageUrl(response.backdrop_path));console.log(response.backdrop_path);
        movieResult.setBackdropPic(tmdbMngr.generateImageUrl(response.backdrop_path));
        movieResult.setTmdbId(response.id);
        if(tmdbMngr.validImdb(response.imdb_id) === true) {
            movieResult.setImdbId(response.imdb_id);
        }
        movieResult.setTitle(response.title);
        movieResult.setStatus(response.status);
        movieResult.setTagline(response.tagline);
        if(tmdbMngr.checkAdult(response.adult) === true) {
            movieResult.setAdult(true);
        }
        movieResult.addPosterPic({ url : tmdbMngr.generateImageUrl(response.poster_path)});
        movieResult.setBudget(response.budget);

        // Set genres
        var tmdbGenres = response.genres;
        _.each(tmdbGenres, function (tmdbGenre, key) {
            var tokenId = tmdbMngr.tmdbTokenIdToTokenId(tmdbGenre.id);
            var newGenre = new tokenJson();
            newGenre.setTokenId(tokenId);
            newGenre.setTmdbId(tmdbGenre.id);
            newGenre.setValue(tmdbGenre.name);
            movieResult.addGenre(newGenre);
        });

        movieResult.setHomepage(response.homepage);
        movieResult.setOriginalLanguage(response.original_language);
        movieResult.setOriginalTitle(response.original_title);
        movieResult.setOverview(response.overview);
        movieResult.setPopularity(response.popularity);

        var tmdbProductionCompanies = response.production_companies;
        _.each(tmdbProductionCompanies, function (tmdbCompany, key) {
            var tokenId = tmdbMngr.tmdbTokenIdToTokenId(tmdbCompany.id);
            var newToken = new tokenJson();
            newToken.setTokenId(tokenId);
            newToken.setTmdbId(tmdbCompany.id);
            newToken.setValue(tmdbCompany.name);
            movieResult.addProductionCompany(newToken);
        });

        var tmdbProductionCountries = response.production_countries;
        _.each(tmdbProductionCountries, function (tmdbCountry, key) {
            var tokenId = tmdbMngr.tmdbTokenIdToTokenId(tmdbCountry.iso_3166_1);
            var newToken = new tokenJson();
            newToken.setTokenId(tokenId);
            newToken.setTmdbId(tmdbCountry.iso_3166_1);
            newToken.setValue(tmdbCountry.name);
            movieResult.addProductionCountry(newToken);
        });

        movieResult.setReleaseDate(response.release_date);
        movieResult.setRevenue(response.revenue);
        movieResult.setDuration(response.runtime);

        var tmdbSpokenLanguages = response.spoken_languages;
        _.each(tmdbSpokenLanguages, function (tmdbLanguage, key) {
            var tokenId = tmdbMngr.tmdbTokenIdToTokenId(tmdbLanguage.iso_639_1);
            var newToken = new tokenJson();
            newToken.setTokenId(tokenId);
            newToken.setTmdbId(tmdbLanguage.iso_639_1);
            newToken.setValue(tmdbLanguage.name);
            movieResult.addSpokenLanguage(newToken);
        });

        movieResult.setTmdbVoteAverage(response.vote_average);
        movieResult.setTmdbVoteCount(response.vote_count);

        deffered.resolve(movieResult);

    });

    return deffered.promise;
};

module.exports = tmdbMngr;
