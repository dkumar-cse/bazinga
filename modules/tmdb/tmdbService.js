/**
 * @author : DivyaKumar
 * @date : 16 Dec 2016
 * @info : api.themoviedb.org Services
 *
 */

var rp = require('request-promise');
var Q = require('q');
var _ = require('lodash');

var apiKey = process.env.tmdbApiKey;
var apiDomain = process.env.tmdbApiDomain;
var apiVersion = process.env.tmdbApiVersion;
var tmdbService = module.exports;

tmdbService.requestApi = function(apiUrl, params) {

    apiUrl = apiDomain + "/" + apiVersion + apiUrl;

    var deferred = Q.defer();
    var options = {
	    method: 'GET',
	    uri: apiUrl,
	    qs: {// include query params
		api_key : apiKey
	    },
	    headers: {//include headers
	        //'User-Agent': 'Request-Promise'
	    },
	    json: true // Automatically parses the JSON string in the response
	};

    // include query params
    _.each(params, function(value, key, params) {
	options.qs[key] = value;
    });

    rp(options).then(function(response) {
	deferred.resolve(response);
    })
    .catch(function(err) {
	deferred.reject(err);
    });

    return deferred.promise;
};


module.exports = tmdbService;
