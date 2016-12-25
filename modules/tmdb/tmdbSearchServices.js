/**
 * @author : DivyaKumar
 * @date : 16 Dec 2016
 * @info : api.themoviedb.org Services
 *
 */

var rp = require('request-promise');
var Q = require('q');
var _ = require('lodash');

var apiKey = "5467af4d9df8b89c6b8de0218f3d342b";
var apiDomain = "https://api.themoviedb.org";
var apiVersion3 = 3;
var tmdbSearchServices = module.exports;

var getApiUrlVersion3 = function() {
    return apiDomain + "/" + apiVersion3;
};

var getTmdbMovieSearchApiUrl = function() {
    return getApiUrlVersion3() + "/search/movie";
};

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

var checkEmpty = function(x) {
    if(undefined===x || null===x){
	return true;
    }

    return false;
};

var validateSearchText = function(x) {
    if(checkEmpty(x)===true) {
	return false;
    }
    return true;
};

tmdbSearchServices.searchMovie = function(searchText, pageNo, includeAdult, region, year, primaryReleaseYear) {
    var apiUrl = getTmdbMovieSearchApiUrl();
    var params = {};
    var deffered = Q.defer();

    if(validateSearchText(searchText) === false) {// searchText (Movie title to search for.) - mandatory.   Pass a text query to search. This value should be URI encoded
	deffered.reject({message : "searchText is empty."});
    } else {
	params.query = searchText; // searchText (Movie title to search for.) - mandatory.  Pass a text query to search. This value should be URI encoded

	if(checkEmpty(pageNo)===false) {// Page number to return - optional, default-1
	    params.page = pageNo;
	}
	if(checkEmpty(includeAdult)===false) {// Choose whether to inlcude adult (pornography) content in the results - optional, default-false
	    params.includeAdult = true;
	}
	if(checkEmpty(region)===false) {// Specify a ISO 3166-1 code to filter release dates - optional
	    params.region = region;
	}
	if(checkEmpty(year)===false) {// Year of release. - optional, default-<empty>
	    params.year = year;
	}
	if(checkEmpty(primaryReleaseYear)===false) {// Year of release. - optional, default-<empty>
	    params.primaryReleaseYear = primaryReleaseYear;
	}
	params.language = 'en-US'; // optional - default-"en-US"

	this.requestApi(apiUrl, params).then(function(response) {
	    deffered.resolve(response);
	});
    }

    return deffered.promise;
};


module.exports = tmdbSearchServices;
