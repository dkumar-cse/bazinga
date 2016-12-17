"use strict";

var rp = require('request-promise');
var Q = require('q');

var apiKey = "AIzaSyCQuKNAg0xXhdAbVCPprilonjC84LmWQoY";
var customSearchEngineId = "007813257805742696303:b0gaxbkcnia";
var searchApi = "https:\/\/www.googleapis.com\/customsearch\/v1";

var movieGoogler = module.exports;

/*
*  search_api_url = search_api + ? key = <api_key> &cx = <search_engine_id> &q=<query>
*
*/


movieGoogler.searchMovie = function(movieQuery) {
    var deferred = Q.defer();
    var options = {
	    method: 'GET',
	    uri: searchApi,
	    qs: {// include query params
            key : apiKey,
            cx : customSearchEngineId,
            q : movieQuery
	    },
	    headers: {//include headers
	        //'User-Agent': 'Request-Promise'
	    },
	    json: true // Automatically parses the JSON string in the response

	};

    rp(options).then(function(response) {
        deferred.resolve(response);
    })
    .catch(function(err) {
        deferred.reject(err);
    });

    return deferred.promise;
};


module.exports = movieGoogler;
