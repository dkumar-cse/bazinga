/**
 * @author : DivyaKumar
 * @date : 18 Dec 2016
 * @info : Google Movie Search
 *
 */

 "use strict";

var rp = require('request-promise');
var Q = require('q');
var redis = require('redis');


var cacheManager = module.exports;

cacheManager.set = function (key, value) {
    var deffered = Q.defer();
    var client = redis.createClient();
    client.set(key, value).then(function() {
        deffered.resolve({res : "saved"});
    });
    return deffered.promise;
};

cacheManager.get = function (key) {
    var deffered = Q.defer();
    var client = redis.createClient();
    client.get(key, function(err, reply) {
        deffered.resolve(reply);
    });
    return deffered.promise;
};



module.exports = cacheManager;
