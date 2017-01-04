/**
 * @author : DivyaKumar
 * @date : 18 Dec 2016
 * @info : Google Movie Search
 *
 */


var rp = require('request-promise');
var request = require('request');
var _ = require('lodash');
var Q = require('q');
var async = require('async');
var ItemHomes = require('../../resources/itemHomes');
var toiProcessor = require('./toiProcessor');
var bhProcessor = require('./bhProcessor');
var imdbProcessor = require('./imdbProcessor');
var mmProcessor = require('./mmProcessor');
var common = require('../../modules/utils/common');

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

movieGoogler.getItemHomeName = function(item) {
    var deffered = Q.defer();
    var item_home_name = null;
    var link = item.link;
    async.each(ItemHomes, function(itemHomeName, callback) {
        var match = link.match(/timesofindia/g);
        if((link.match(/timesofindia/g)!==null) && (link.match(/timesofindia/g).length > 0)) {
            //  matched to  this itemHomeName check
            item_home_name = "toi";
            callback();
        } else if((link.match(/imdb/g)!==null) && (link.match(/imdb/g).length > 0)) {
            //  matched to  this itemHomeName check
            item_home_name = "imdb";
            callback();
        } else if((link.match(/moviemutants/g)!==null) && (link.match(/moviemutants/g).length > 0)) {
            //  matched to  this itemHomeName check
            item_home_name = "mm";
            callback();
        } else if((link.match(/bollywoodhungama/g)!==null) && (link.match(/bollywoodhungama/g).length > 0)) {
            //  matched to  this itemHomeName check
            item_home_name = "bh";
            callback();
        } else {
            //  did not  matched to  this itemHomeName check
            callback();
        }
    }, function(err) {
        if (err) {
            // ERROR
            console.log(err);
        } else {
            deffered.resolve({name: item_home_name});
        }
    });
    return deffered.promise;
};

movieGoogler.getMovieInfoFromGoogleItem = function(item, itemHomeName){
    var deffered = Q.defer();
    if(itemHomeName.name === 'toi') {
        // Time Of India
        toiProcessor.getRatingFromGoogleItem(item).then(function(rating) {console.log('toi');console.log(rating);
            deffered.resolve({rating:rating, name:itemHomeName.name});
        });
    } else if(itemHomeName.name === 'imdb') {
        imdbProcessor.getRatingFromGoogleItem(item).then(function(rating) {console.log("imdb_id");console.log(rating);
            deffered.resolve({rating:rating, name:itemHomeName.name});
        });
    }else if(itemHomeName.name === 'mm') {
        mmProcessor.getRatingFromGoogleItem(item).then(function(rating) {console.log('mm');console.log(rating);
            deffered.resolve({rating:rating, name:itemHomeName.name});
        });
    }else if(itemHomeName.name === 'bh') {
        bhProcessor.getRatingFromGoogleItem(item).then(function(rating) {console.log('bh');console.log(rating);
            deffered.resolve({rating:rating, name:itemHomeName.name});
        });
    }else {
        // Time Of India
        // htProcessor.getRatingFromGoogleItem(item).then(rating) {
        //     deffered.resolve(rating);
        // };
        deffered.resolve({});
    }
    return deffered.promise;
};

movieGoogler.searchMovie = function (movieQuery) {
    var deferred = Q.defer();
    customsearch.cse.list({ cx: CX, q: movieQuery, auth: API_KEY }, function (err, resp) {
        if (err) {
            console.log(err);
            deferred.reject(err);
        }
        // Got the response from custom search
        if (resp.items && resp.items.length > 0) {
            deferred.resolve(resp);
        }
    });
    return deferred.promise;
};

movieGoogler.getMovieInfoFromGoogle = function (movieQuery) {
    var deffered = Q.defer();
    var movieInfo = {};
    movieGoogler.searchMovie(movieQuery).then(function(googleSearchResult) {
        var items = googleSearchResult.items;
        async.each(items, function(item, callback) {
            movieGoogler.getItemHomeName(item).then(function(itemHomeName) {console.log(itemHomeName);
                if(itemHomeName.name!==null && itemHomeName.name!=="") {
                    movieGoogler.getMovieInfoFromGoogleItem(item, itemHomeName).then(function(googleMovieInfoJson) {

                        movieInfo[itemHomeName.name] = googleMovieInfoJson;

                        callback();
                        // common.mergeIn(movieInfo, googleMovieInfoJson).then(function(){
                        //     callback();
                        // });
                    });
                } else {
                    callback();
                }
            });
        }, function(err) {
            if( err ) {
              console.log('ERROR : ' + err);
          } else {
                deffered.resolve(movieInfo);
            }
        });
    });
    return deffered.promise;
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
