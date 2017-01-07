/**
 * @author : DivyaKumar
 * @date : 06 Jan 2017
 * @info :
 *
 */

var request = require('request');
var _ = require('lodash');
var Q = require('q');
var logger = require('../modules/utils/logger');
var PersonsCollection = require('../modules/mongo/persons/PersonsCollection');
var tmdbPeopleService = require('../modules/tmdb/tmdbPeopleService');
var cacheManager = require('../modules/cache/cacheManager');
var personService = module.exports;





personService.getPersonDetail = function(req, res) {
    var personId = req.query.id;
    personService.getPersonResponseByID(personId).then(function(response){console.log("vvv");
    console.log(response);
        res.json(response);
    });
};

personService.checkForHalfResult = function(personJson) {
    // check if movieJson is half and we have to make tmdb api callback
    if(_.isNull(personJson.name) || personJson.name==="null") {
        return true; // empty
    }
    return false;
};

personService.getPersonResponseByID = function(personId) {
    var cacheKey = "personIddd_" + personId;

    var deffered = Q.defer();

    cacheManager.get(cacheKey).then(function(cacheResult){
        if(cacheResult  === null ) {
            PersonsCollection.getPersonFromCollection(personId).then(function (resultFromCollection) {console.log(1);
                if(personService.checkForHalfResult(resultFromCollection)===true) {console.log(2);
                    var tmdbId = resultFromCollection.tmdbId;
                    tmdbMngr.getPersonDetails(tmdbId).then(function(tmdbResponse) {console.log(5);
                        var response = tmdbResponse;
                        response.id = result._id;
                        response._id = result._id;
                        PersonsCollection.updatePersonInCollection(response).then(function(result){
                            deffered.resolve(result);
                        });
                    });
                } else {console.log(3);
                    //cacheManager.set(cacheKey, JSON.stringify(result)).then(function(cacheSetResult) {
logger.info(resultFromCollection);
                        deffered.resolve({res:"got from DB", result: resultFromCollection });
                        // res.json({res:"got from DB", result: result });
                    //});
                    //res.json({res:"got from DB", result: result });
                }
            });
        } else {console.log(4);
            deffered.resolve({res:"got from CACHE", result: JSON.parse(cacheResult) });
            // res.json({res:"got from CACHE", result: JSON.parse(cacheResult) });
        }
    });
    return deffered.promise;

};


module.exports = personService;
