/** 
 * @author : DivyaKumar
 * @date : 16 Dec 2016
 * @info : api.themoviedb.org Services
 * 
 */

var rp = require('request-promise');
var Q = require('q');
var _ = require('underscore');

var apiKey = "5467af4d9df8b89c6b8de0218f3d342b";
var apiDomain = "https://api.themoviedb.org";
var apiVersion3 = 3;
var tmdbMovieServices = module.exports;

var getMovieDetailsApiUrl = function(movieId) {
    return apiDomain + "/" + apiVersion3 + "/movie/" + movieId;
}

this.requestApi = function(apiUrl, params) {
    
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
	    json: true, // Automatically parses the JSON string in the response
	    body: '{}'
	    
	};
 
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
}

tmdbMovieServices.getMovieDetails = function(movieId) {
    var deffered = Q.defer();
    var apiUrl = getMovieDetailsApiUrl(movieId);
    var params = {};
    params.language = 'en-US'; //Pass a ISO 639-1 value to display translated data for the fields that support it. - optional.
    //params.append_to_response = null;  // Append requests within the same namespace to the response
    this.requestApi(apiUrl, params).then(function(response) {
	deffered.resolve(response);
    });
    
    return deffered.promise;
}

module.exports = tmdbMovieServices;
