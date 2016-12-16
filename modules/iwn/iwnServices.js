/** 
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info : Starting Point
 * 
 */

var request = require('request');
var rp = require('request-promise');
var Q = require('q');

var api_key = "5cc92604-a1ff-4d5e-9353-db71e214ea7a";
var apiDomain = "http://imdb.wemakesites.net/api";

var iwnServices = module.exports;

this.requestApi = function(apiUrl, params) {

    var deferred = Q.defer();
    var options = {
	    uri: apiUrl,
	    qs: {// include query params 
		api_key: api_key  
	    },
	    headers: {//include headers		
	        //'User-Agent': 'Request-Promise'
	    },
	    json: true // Automatically parses the JSON string in the response 
	};
    if(params.searchText != null) {
	options.qs.q = params.searchText;
    } 
    rp(options).then(function(response) {
	deferred.resolve(response);	
    })
    .catch(function(err) {
	deferred.reject(err);
    })
    
    return deferred.promise;
}

var constructItemApi = function(itemId) {
    var apiUrl = apiDomain + itemId;
    return apiUrl;
}

var constructSearchApi = function(serachText) {
    var apiUrl = apiDomain + "/search";
    return apiUrl;
}

var validateItemId = function(itemId) {
    if(itemId != null) {
	return true;
    }
}

var validateSearchText = function(searchText){
    if(searchText != null) {
	return true;
    }
}



iwnServices.getItemDetail = function(itemId) {
    var deffered = Q.defer();
    if(validateItemId(itemId) === true) {
	var params = {};
	var apiUrl = constructItemApi(itemId);
	
	this.requestApi(apiUrl, params).then(function(response) {
	    deffered.resolve(response);
	});
    } 
    return deffered.promise;
}

iwnServices.getSearchResult = function(searchText) {
    var deffered = Q.defer();
    
    if(validateSearchText(searchText) === true) {
	var apiUrl = constructSearchApi(searchText);
	var params = {};
	params.searchText = searchText;
	
	this.requestApi(apiUrl, params).then(function(response) {
	    deffered.resolve(response);
	});
    } 
    return deffered.promise;
}


module.exports = iwnServices;
