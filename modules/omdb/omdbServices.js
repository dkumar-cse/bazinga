/**
 * @author : DivyaKumar
 * @date : 16 Dec 2016
 * @info : www.omdbapi.com Services
 *
 */

var request = require('request');
var rp = require('request-promise');
var Q = require('q');
var _ = require('lodash');

var apiKey = "5cc92604-a1ff-4d5e-9353-db71e214ea7a";
var apiDomain = "http://www.omdbapi.com";
var apiVersion = 1;
var omdbServices = module.exports;


// OMDB Params
var itemType = {//Type of result to return.
	movie : "movie",
	series : "series",
	episode : "episode"
};

var getOmdbApiUrl = function() {
    return apiDomain+"/";
}

this.requestApi = function(apiUrl, params) {

    var deferred = Q.defer();
    var options = {
	    uri: apiUrl,
	    qs: {// include query params
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
}

var checkEmpty = function(x) {
    if(undefined==x || null==x){
	return true;
    }

    return false;
}

var validateSearchText = function(x) {
    if(checkEmpty(x)===true) {
	return false;
    }
    return true;
}

omdbServices.getBySearch = function(searchText, type, year, pageNo) {
    var deffered = Q.defer();
    var apiUrl = getOmdbApiUrl();
    var params = {};

    if(validateSearchText(searchText) === false) {// searchText (Movie title to search for.) - mandatory
	deffered.reject({message : "searchText is empty."});
    }else{
	params.s = searchText;

	if(checkEmpty(type)===false) {// Type of result to return. - optional, default-<empty>  (movie, series, episode)
	    params.type = type;
	}
	if(checkEmpty(year)===false) {// Year of release. - optional, default-<empty>
	    params.y = year;
	}
	if(checkEmpty(pageNo)===false) {// Page number to return - optional, default-1
	    params.page = pageNo;
	}
	params.r = "json"; // The data type to return. - optional, default-json   (json, xml)
	params.v = apiVersion; //API version

	this.requestApi(apiUrl, params).then(function(response) {
	    deffered.resolve(response);
	});
    }


    return deffered.promise;
}

omdbServices.getMovieBySearch = function(searchText, year, pageNo) {
    var deffered = Q.defer();
    if(validateSearchText(searchText) === true) {
	var type = itemType.movie;

	omdbServices.getBySearch(searchText, type, year, pageNo).then(function(response) {
	    deffered.resolve(response);
	});
    }

    return deffered.promise;
}


omdbServices.getByIdAndTitle = function(imdbId, title, type, year) {
    var deffered = Q.defer();
    var apiUrl = getOmdbApiUrl();
    var params = {};

    if(checkEmpty(imdbId) === true && checkEmpty(title) === true) {// (A valid IMDb ID) either Id or Title is required for search
		deffered.reject({message : "both (Id and Title) are empty."});
    }else{
	if(checkEmpty(imdbId)===false) { // A valid IMDb ID (e.g. tt1285016)
	    params.i = imdbId;
	}
	if(checkEmpty(title)===false) { // Movie title to search for.
	    params.t = title;
	}
	if(checkEmpty(type)===false) {// Type of result to return. - optional, default-<empty> ( movie, series, episode)
	    params.type = type;
	}
	if(checkEmpty(year)===false) {// Year of release. - optional, default-<empty>
	    params.y = year;
	}

	params.plot = "full"; // Return short or full plot. - optional, default-short   (short, full)
	params.r = "json";  // The data type to return - optional, default-json   (json, xml)
	params.v = apiVersion; //API version
	params.tomatoes = true; //Include Rotten Tomatoes ratings. - optional,  default-false   (false, true)
	this.requestApi(apiUrl, params).then(function(response) {
	    deffered.resolve(response);
	});
    }

    return deffered.promise;
}

omdbServices.getMovieByIdAndTitle = function(imdbId, title, year) {
    var deffered = Q.defer();
    var type = itemType.movie;
    omdbServices.getByIdAndTitle(imdbId, title, type, year).then(function(response) {
	deffered.resolve(response);
    });

    return deffered.promise;
}


module.exports = omdbServices;
