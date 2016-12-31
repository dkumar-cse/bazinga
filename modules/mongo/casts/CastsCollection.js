
var MongoClient = require('mongodb').MongoClient;
var autoIncrement = require("mongodb-autoincrement");
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var Q = require('q');
var async = require('async');

var mongoServices = require('../mongoServices');
var common = require('../../utils/common');

var CastsCollection = module.exports;

var collectionName = 'casts';


CastsCollection.getMovieCasts = function (movieId) {
    var deffered = Q.defer();
    // Use connect method to connect to the Server
    mongoServices.getDbConnection().then(function(db) {
        console.log('Connection established to bazinga');
        db.collection('casts').find({item_id:parseInt(movieId)}).toArray(function ( err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                deffered.resolve(result);
            } else {
                deffered.resolve(result);
                console.log('No document(s) found with defined "find" criteria!');
            }
            //Return connection
            mongoServices.returnDbConnection(db);
        });

    });
    return deffered.promise;
};



CastsCollection.saveTmdbMovieCasts = function (movieId, movieCastsJson) {console.log("dddd");
    var deffered = Q.defer();
    var movieCastsResult = [];
    var movieCrewResult = [];

    mongoServices.getDbConnection().then(function(db) {
        console.log('Connection established to bazinga in CastsCollection.saveTmdbMovieCasts');
        var fieldName = "casts_id";
        var personCollection = "persons";
        var castsCollection = "casts";
        var casts = movieCastsJson.cast;
        var castsAndCrews = casts.concat(movieCastsJson.crew);
        async.each(castsAndCrews, function(person, callback){
            db.collection(personCollection).find({tmdbId:person.id}).toArray(function(err, result) {
                if(result.length === 0) {
                    autoIncrement.getNextSequence(db, personCollection, fieldName, function (err, autoIndex) {
                        person._id = autoIndex;
                        person.tmdbId = person.id;
                        person.id = person._id;

                        db.collection(personCollection).insert(person).then(function(result) {
                            if(person.hasOwnProperty("cast_id") && person.hasOwnProperty("character")) {
                                // this person is a cast
                                common.mergeIn(movieCastsResult, person).then(function(movieCastsJsonResult){
                                    callback();
                                });
                            }else if(person.hasOwnProperty("job")) {
                                // this person is a crew member
                                common.mergeIn(movieCrewResult, person).then(function(movieCastsJsonResult){
                                    callback();
                                });
                            }
                        });
                    });
                } else {
                    db.collection(personCollection).update({tmdbId:parseInt(person.tmdbId)}, person, {upsert:true}).then(function(result) {
                        if(person.hasOwnProperty("cast_id") && person.hasOwnProperty("character")) {
                            // this person is a cast
                            common.mergeIn(movieCastsResult, person).then(function(movieCastsJsonResult){
                                callback();
                            });
                        }else if(person.hasOwnProperty("job")){
                            // this person is a crew member
                            common.mergeIn(movieCrewResult, person).then(function(movieCastsJsonResult){
                                callback();
                            });
                        }
                    });
                }
            });

        }, function (err) {
            if(err) {
                console.log("ERROR");
            }else{
                var movieCastsJsonResult = {};
                movieCastsJsonResult.item_id = parseInt(movieId);
                movieCastsJsonResult.casts = movieCastsResult;
                movieCastsJsonResult.crew = movieCrewResult;
                movieCastsJsonResult.tmdbId = parseInt(movieCastsJson.id);

                db.collection(castsCollection).update({item_id:parseInt(movieId)}, movieCastsJsonResult, {upsert:true}).then(function(result) {
                    mongoServices.returnDbConnection(db);
                });
                deffered.resolve(movieCastsJsonResult);
            }
        });
     });

    return deffered.promise;
};


module.exports = CastsCollection;
