

var request = require('request');
var _ = require('lodash');
var Q = require('q');
var async = require('async');
var common = require('./common');


var castsProcessor = module.exports;

castsProcessor.seperateCrew = function (crew) {
    var deffered = Q.defer();
    var directors = [];
    var producers = [];
    var writers = [];
    var others = [];
    async.each(crew, function(eachCrew, callback) {
        if(eachCrew.job.toUpperCase() === "DIRECTOR" && eachCrew.department.toUpperCase() === "DIRECTING") {
            common.mergeIn(directors, eachCrew).then(function(result){
                callback();
            });

        } else if (eachCrew.department.toUpperCase() === "WRITING") {
            common.mergeIn(writers, eachCrew).then(function(result){
                callback();
            });
        } else if (eachCrew.job.toUpperCase() === "PRODUCER") {
            common.mergeIn(producers, eachCrew).then(function(result){
                callback();
            });
        } else {
            common.mergeIn(others, eachCrew).then(function(result){
                callback();
            });
        }
    }, function(err) {
        if(err) {
            //  ERROR
            console.log("Error in castsProcessor.seperateCrew : " + err);
        } else {
            deffered.resolve({
                directors : directors,
                writers : writers,
                producers : producers,
                others : others
            });
        }
    });
    return deffered.promise;
};

module.exports = castsProcessor;
