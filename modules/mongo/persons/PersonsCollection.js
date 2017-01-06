
var MongoClient = require('mongodb').MongoClient;
var autoIncrement = require("mongodb-autoincrement");
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var Q = require('q');
var async = require('async');

var mongoServices = require('../mongoServices');
var common = require('../../utils/common');

var PersonsCollection = module.exports;

var collectionName = 'persons';

PersonsCollection.getPersonFromCollection = function(personId) {
    var deffered = Q.defer();
    // Use connect method to connect to the Server
    mongoServices.getDbConnection().then(function(db) {
        console.log('Connection established to bazinga');
        db.collection('persons').find({_id:parseInt(personId)}).toArray(function ( err, result) {
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




PersonsCollection.updatePersonInCollection = function(personDetailJson) {
    var deffered = Q.defer();

    mongoServices.getDbConnection().then(function(db) {
        console.log('Connection established to bazinga in ItemsCollection.updateItemInCollection');
        db.collection(collectionName).update({_id:personDetailJson._id}, personDetailJson, {upsert:true}).then(function() {
            mongoServices.returnDbConnection(db);
        });
        deffered.resolve({msg : "updated", result : personDetailJson });
    });

    return deffered.promise;
};

module.exports = PersonsCollection;
