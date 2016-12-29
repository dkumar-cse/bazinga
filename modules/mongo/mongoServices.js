
var MongoClient = require('mongodb').MongoClient;
var autoIncrement = require("mongodb-autoincrement");
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var Q = require('q');
var async = require('async');




var mongoServices = module.exports;

// mongoServices.saveMovieInCollection = function(movieDetailsJson){
//     var deffered = Q.defer();
//     MongoClient.connect(new Server("localhost", 27017), function (err, db) {
//        db.collection('movies').find({ _id:movieId }).toArray(function (err, result) {
//            deffered.resolve(result);
//        });
//    });
//    return deffered.promise;
// };

mongoServices.mergeIn = function (a1, a2) {
    var deffered = Q.defer();
    a1.push(a2);
    deffered.resolve(a1);

    return deffered.promise;

};


mongoServices.getMovieFromCollection = function(movieId){

    var deffered = Q.defer();

/* // NOT WORKING - check Later
console.log("start");
    // Set up the connection to the local db
    var mongoClient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
console.log("start4");
    // Open the connection to the server
    mongoClient.open(function(err, mongoClient) {console.log("start2");

        // Get the first db and do an update document on it
        var db = mongoClient.db("bazinga");
        db.collection('movies').find({_id:3}, function(err, result) {console.log("start3");
            assert.equal(null, err);
            // assert.equal(1, result);
            console.log(result);


            // Get another db and do an update document on it
            // var db2 = mongoClient.db("integration_tests2");
            // db2.collection('mongoClient').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
            //     assert.equal(null, err);
            //     //  assert.equal(1, result);
            //
            //     // Close the connection
            //     mongoClient.close();
            // });
        });
    });
*/


    // Connection URL. This is where your mongodb server is running.
    var url = 'mongodb://localhost:27017/bazinga';

    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
             console.log('Connection established to', url);

            // do some work here with the database.
            db.collection('movies').find({ _id:parseInt(movieId) }).toArray(function ( err, result) {
                if (err) {
                     console.log(err);
                } else if (result.length) {
                    result[0].id = result[0]._id; // copy _id value into id
                    deffered.resolve(result[0]);

                } else {deffered.resolve(result);
                     console.log('No document(s) found with defined "find" criteria!');
                }
                //Close connection
                db.close();
            });
        }
    });
    return deffered.promise;
};


mongoServices.updateMovieInCollection = function(movieDetailsJson) {
    var deffered = Q.defer();

    // Connection URL. This is where your mongodb server is running.
    var url = 'mongodb://localhost:27017/bazinga';

    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            console.log('Connection established to', url);
            var collectionName = "movies";
            db.collection(collectionName).update({_id:movieDetailsJson._id}, movieDetailsJson, {upsert:true});
            deffered.resolve({msg : "updated", result : movieDetailsJson });
        }
    });

    return deffered.promise;
};

mongoServices.saveMovieInCollection = function(movieDetailsJson){
    var deffered = Q.defer();

    // Connection URL. This is where your mongodb server is running.
    var url = 'mongodb://localhost:27017/bazinga';

    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
             console.log('Connection established to', url);

             var fieldName = "id";
             var collectionName = "movies";
             autoIncrement.getNextSequence(db, collectionName, fieldName, function (err, autoIndex) {
                 var collection = db.collection(collectionName);
                 movieDetailsJson._id = autoIndex;
                 collection.insert(movieDetailsJson);
                 deffered.resolve({res : "inserted", id:autoIndex});
             });
         }
     });



     return deffered.promise;
};


mongoServices.findByTmdbId = function(tmdbId) {
    var deffered = Q.defer();
    // Connection URL. This is where your mongodb server is running.
    var url = 'mongodb://localhost:27017/bazinga';

    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            console.log('Connection established to', url);
            db.collection('movies').find({ tmdbId:parseInt(tmdbId) }).toArray(function ( err, result) {
                if (err) {
                     console.log(err);
                } else if (result.length) {
                    result[0].id = result[0]._id; // copy _id value into id
                    deffered.resolve(result[0]);

                } else {deffered.resolve(result);
                     console.log('No document(s) found with defined "find" criteria!');
                }
                //Close connection
                db.close();
            });
        }
    });
    return deffered.promise;
};


mongoServices.saveTmdbMovieCasts = function (movieId, movieCastsJson) {
    var deffered = Q.defer();
    var movieCastsResult = [];

        // Connection URL. This is where your mongodb server is running.
        var url = 'mongodb://localhost:27017/bazinga';

        // Use connect method to connect to the Server
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                console.log('Connection established to', url);
                var fieldName = "casts_id";
                var personCollection = "persons";
                var castsCollection = "casts";
                async.each(movieCastsJson.cast, function(person, callback){
                    db.collection(personCollection).find({tmdbId:person.id}).toArray(function(err, result) {
                        if(result.length === 0) {
                            autoIncrement.getNextSequence(db, personCollection, fieldName, function (err, autoIndex) {console.log("2");
                                 person._id = autoIndex;
                                 person.tmdbId = person.id;
                                 person.id = person._id;
                                 console.log(autoIndex);
                                 db.collection(personCollection).insert(person).then(function(result) {
                                     mongoServices.mergeIn(movieCastsResult, person).then(function(movieCastsJsonResult){
                                         callback();
                                     });
                                 });
                                //  db.collection(personCollection).update({tmdbId:parseInt(person.tmdbId)}, person, {upsert:true}).then(function(result) {
                                //
                                //  });
                            });
                        } else {
                            mongoServices.mergeIn(movieCastsResult, result[0]).then(function(movieCastsJsonResult){
                                callback();
                            });
                        }
                    });

                }, function (err) {
                    if(err) {
                        console.log("ERROR");
                    }else{
                        var movieCastsJsonResult = {};
                        movieCastsJsonResult.movie_id = parseInt(movieId);
                        movieCastsJsonResult.casts = movieCastsResult;
                        movieCastsJsonResult.tmdbId = parseInt(movieCastsJson.id);

                        db.collection(castsCollection).update({movie_id:parseInt(movieId)}, movieCastsJsonResult, {upsert:true});
                        deffered.resolve(movieCastsJsonResult);
                    }
                });
             }
         });

    return deffered.promise;
};




mongoServices.getMovieCasts = function (movieId) {
    var deffered = Q.defer();
    // Connection URL. This is where your mongodb server is running.
    var url = 'mongodb://localhost:27017/bazinga';

    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            console.log('Connection established to', url);
            db.collection('casts').find({movie_id:parseInt(movieId)}).toArray(function ( err, result) {
                if (err) {
                    console.log(err);
                } else if (result.length) {
                    deffered.resolve(result);
                } else {
                    deffered.resolve(result);
                    console.log('No document(s) found with defined "find" criteria!');
                }
                //Close connection
                db.close();
            });
        }
    });
    return deffered.promise;
};




module.exports = mongoServices;
