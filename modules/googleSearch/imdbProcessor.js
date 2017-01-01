
var Q = require('q');
var imdbProcessor = module.exports;


imdbProcessor.verifyRating = function (rating, item) {
    return true;
};

imdbProcessor.getRatingFromGoogleItem = function (item) {
    var deffered = Q.defer();
    deffered.resolve(item.pagemap.aggregaterating[0]);
    return deffered.promise;
};

module.exports = imdbProcessor;
