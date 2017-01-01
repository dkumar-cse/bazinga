
var MongoClient = require('mongodb').MongoClient;
var autoIncrement = require("mongodb-autoincrement");
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var Q = require('q');
var async = require('async');

var mongoServices = require('../mongoServices');
var common = require('../../utils/common');

var ReviewsCollection = module.exports;

var collectionName = 'reviews';


ReviewsCollection.getMovieRatingsAndReviews = function (movieId) {
    var deffered = Q.defer();
    // Use connect method to connect to the Server
    mongoServices.getDbConnection().then(function(db) {
        console.log('Connection established to bazinga in ReviewsCollection.getMovieRatingAndReviews');
        db.collection(collectionName).find({item_id:parseInt(movieId)}).toArray(function ( err, result) {
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



ReviewsCollection.saveMovieRatingsAndReviews = function (movieId, movieRatRev) {
    var deffered = Q.defer();

    mongoServices.getDbConnection().then(function(db) {
        console.log('Connection established to bazinga in ReviewsCollection.saveMovieRatingAndReviews');
        movieRatRev.item_id = parseInt(movieId);
        movieRatRev.item_type = "MOVIE";
        db.collection(collectionName).update({item_id:parseInt(movieId)}, movieRatRev, {upsert:true}).then(function(result) {
            deffered.resolve({msg:"movie review updated for movie ID = " + movieId});
        });
        mongoServices.returnDbConnection(db);
     });

    return deffered.promise;
};


module.exports = ReviewsCollection;
