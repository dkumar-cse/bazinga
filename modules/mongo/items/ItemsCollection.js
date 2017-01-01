
var MongoClient = require('mongodb').MongoClient;
var autoIncrement = require("mongodb-autoincrement");
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var Q = require('q');
var async = require('async');

var mongoServices = require('../mongoServices');


var ItemsCollection = module.exports;

var collectionName = 'items';

ItemsCollection.getItemFromCollection = function(itemId) {
    var deffered = Q.defer();

    mongoServices.getDbConnection().then(function(db) {
        //HURRAY!! We are connected. :)
         console.log('Connection established to bazinga in ItemsCollection.getItemFromCollection');

        // do some work here with the database.
        db.collection(collectionName).find({ _id:parseInt(itemId) }).toArray(function ( err, result) {
            if (err) {
                 console.log(err);
            } else if (result.length) {
                result[0].id = result[0]._id; // copy _id value into id
                deffered.resolve(result[0]);

            } else {
                deffered.resolve(result);
                console.log('No document(s) found with defined "find" criteria in "mongoServices.getMovieFromCollection  " + { _id:'+ parseInt(itemId) +'}');
            }
            //Close connection
            mongoServices.returnDbConnection(db);
        });
    });
    return deffered.promise;
};

ItemsCollection.updateItemInCollection = function(itemDetailJson) {console.log("here");
    var deffered = Q.defer();

    mongoServices.getDbConnection().then(function(db) {
        console.log('Connection established to bazinga in ItemsCollection.updateItemInCollection');
        db.collection(collectionName).update({_id:itemDetailJson._id}, itemDetailJson, {upsert:true}).then(function() {
            mongoServices.returnDbConnection(db);
        });
        deffered.resolve({msg : "updated", result : itemDetailJson });
    });

    return deffered.promise;
};

ItemsCollection.saveItemInCollection = function(itemDetailJson){console.log("here2");
    var deffered = Q.defer();

    mongoServices.getDbConnection().then(function(db) {
        //HURRAY!! We are connected. :)
         console.log('Connection established to bazinga');

         var fieldName = "id";
         autoIncrement.getNextSequence(db, collectionName, fieldName, function (err, autoIndex) {
             var collection = db.collection(collectionName);
             itemDetailJson._id = autoIndex;
             collection.insert(itemDetailJson);
             deffered.resolve({res : "inserted", id:autoIndex});
             mongoServices.returnDbConnection(db);
         });

     });
     return deffered.promise;
};


ItemsCollection.findByTmdbId = function(tmdbId) {
    var deffered = Q.defer();
    mongoServices.getDbConnection().then(function(db) {
        console.log('Connection established to bazinga');
        db.collection(collectionName).find({ tmdbId:parseInt(tmdbId) }).toArray(function ( err, result) {
            if (err) {
                 console.log(err);
            } else if (result.length) {
                result[0].id = result[0]._id; // copy _id value into id
                deffered.resolve(result[0]);
            } else {
                deffered.resolve(result);
                console.log('No document(s) found with defined "find" criteria in "ItemsCollection.findByTmdbId"  + { tmdbId:'+ parseInt(tmdbId)+'}');
            }
            //Close connection
            mongoServices.returnDbConnection(db);
        });
    });
    return deffered.promise;
};

module.exports = ItemsCollection;
