
var Q = require('q');
var bhProcessor = module.exports;


bhProcessor.verifyRating = function (rating, item) {
    return true;
};

bhProcessor.getRatingFromGoogleItem = function (item) {
    var deffered = Q.defer();
    deffered.resolve(item.pagemap.aggregaterating[0]);
    return deffered.promise;
};

module.exports = bhProcessor;
