
var MongoClient = require('mongodb').MongoClient;
var autoIncrement = require("mongodb-autoincrement");
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var Q = require('q');
var async = require('async');
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/bazinga';


var mongoServices = module.exports;


mongoServices.getDbConnection = function() {
    var deffered = Q.defer();
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        deffered.resolve(db);
    });
    return deffered.promise;
};

mongoServices.returnDbConnection = function(db) {
    var deffered = Q.defer();
    db.close();
    deffered.resolve({msg:"connection closed"});
    return deffered.promise;
};

module.exports = mongoServices;
