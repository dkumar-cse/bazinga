/**
 * @author : DivyaKumar
 * @date : 06 Jan 2017
 * @info : api.themoviedb.org Services
 *
 */

var rp = require('request-promise');
var Q = require('q');
var _ = require('lodash');
var tmdbService = require('./tmdbService');


var tmdbPeopleService = module.exports;

var getPeopleDetailApiUrl = function(personId) {
    return "/person/" + personId;
};


tmdbPeopleService.getPeopleDetails = function(personId) {
    var deffered = Q.defer();
    var apiUrl = getPeopleDetailApiUrl(personId);
    var params = {};
    params.language = 'en-US'; //Pass a ISO 639-1 value to display translated data for the fields that support it. - optional.
    //params.append_to_response = null;  // Append requests within the same namespace to the response
    tmdbService.requestApi(apiUrl, params).then(function(response) {
        deffered.resolve(response);
    });

    return deffered.promise;
};


module.exports = tmdbPeopleService;
