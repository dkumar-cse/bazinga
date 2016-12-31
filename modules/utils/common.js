

var request = require('request');
var _ = require('lodash');
var Q = require('q');
var async = require('async');


var common = module.exports;

common.mergeIn = function (a1, a2) {
    var deffered = Q.defer();
    a1.push(a2);
    deffered.resolve(a1);
    return deffered.promise;
};

module.exports = common;
