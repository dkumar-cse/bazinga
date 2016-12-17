
'use strict';
var redis = require('redis');
var Q = require('q');
var _ = require('lodash');
var tmdbMovieServices = require('./tmdbMovieServices');
var movieDetailsJson = require('../../resources/movieDetailsJson');
var tokensJson = require('../../resources/tokensJson');

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

        /*
         * Set movieResult Values
         *
         */
        movieResult.setBackdropPic(response.backdrop_pic);
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
        var genres = new tokensJson();
        var tmdbGenres = response.genres;

        _.each(tmdbGenres, function (tmdbGenre, key) {
            var tmdbGenreId = tmdbGenre.id;
            var genreName = tmdbGenre.name;
            var tokenId = tmdbMngr.tmdbTokenIdToTokenId(tmdbGenreId);
            genres.addToken(tokenId, genreName, tmdbGenreId);
        });
        movieResult.setGenres(genres.getTokens());

        movieResult.setHomepage(response.homepage);
        movieResult.setOriginalLanguage(response.original_language);
        movieResult.setOriginalTitle(response.original_title);
        movieResult.setOverview(response.overview);
        movieResult.setPopularity(response.popularity);

        var productionComapanies = new tokensJson();
        var tmdbProductionCompanies = response.production_companies;
        _.each(tmdbProductionCompanies, function (tmdbCompany, key) {
            var tmdbCompanyId = tmdbCompany.id;
            var companyName = tmdbCompany.name;
            var tokenId = tmdbMngr.tmdbTokenIdToTokenId(tmdbCompanyId);
            productionComapanies.addToken(tokenId, companyName, tmdbCompanyId);
        });
        movieResult.setProductionCompanies(productionComapanies.getTokens());

        var productionCountries = new tokensJson();
        var tmdbProductionCountries = response.production_countries;
        _.each(tmdbProductionCountries, function (tmdbCountry, key) {
            var tmdbCountryId = tmdbCountry.iso_3166_1;
            var countryName = tmdbCountry.name;
            var tokenId = tmdbMngr.tmdbTokenIdToTokenId(tmdbCountryId);
            productionCountries.addToken(tokenId, countryName, tmdbCountryId);
        });
        movieResult.setProductionCountries(productionCountries.getTokens());

        movieResult.setReleaseDate(response.release_date);
        movieResult.setRevenue(response.revenue);
        movieResult.setDuration(response.runtime);

        var spokenLaguages = new tokensJson();
        var tmdbSpokenLanguages = response.spoken_languages;
        _.each(tmdbSpokenLanguages, function (tmdbLanguage, key) {
            var tmdbLanguageId = tmdbLanguage.iso_639_1;
            var languageName = tmdbLanguage.name;
            var tokenId = tmdbMngr.tmdbTokenIdToTokenId(tmdbLanguageId);
            spokenLaguages.addToken(tokenId, languageName, tmdbLanguageId);
        });
        movieResult.setSpokenLanguages(spokenLaguages.getTokens());

        movieResult.setTmdbVoteAverage(response.vote_average);
        movieResult.setTmdbVoteCount(response.vote_count);

        deffered.resolve(movieResult);

    });

    return deffered.promise;
};

module.exports = tmdbMngr;
