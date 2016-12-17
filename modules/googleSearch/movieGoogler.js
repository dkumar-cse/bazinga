/**
 * @author : DivyaKumar
 * @date : 18 Dec 2016
 * @info : Google Movie Search
 *
 */

 "use strict";

var rp = require('request-promise');
var Q = require('q');

var google = require('googleapis');
var customsearch = google.customsearch('v1');


const CX = '007813257805742696303:b0gaxbkcnia';  // CUSTOM SEARCH ENGINE ID
const API_KEY = 'AIzaSyCQuKNAg0xXhdAbVCPprilonjC84LmWQoY';  // GOOGLE API KEY
//const SEARCH_API = 'https:\/\/www.googleapis.com\/customsearch\/v1';  //  GOOGLE

var movieGoogler = module.exports;

/*
*  search_api_url = search_api + ? key = <api_key> &cx = <search_engine_id> &q=<query>
*
*/

movieGoogler.searchMovie = function (movieQuery) {
    var deferred = Q.defer();
    customsearch.cse.list({ cx: CX, q: movieQuery, auth: API_KEY }, function (err, resp) {
        if (err) {
            deferred.reject(err);
        }
        // Got the response from custom search
        if (resp.items && resp.items.length > 0) {
            deferred.resolve(resp);
        }
    });

    return deferred.promise;
};

/*
movieGoogler.searchMovie = function(movieQuery) {
    var deferred = Q.defer();
    var options = {
	    method: 'GET',
	    uri: SEARCH_API,
	    qs: {// include query params
            key : API_KEY,
            cx : CX,
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
*/

module.exports = movieGoogler;
