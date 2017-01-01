// moviemutants.com
var Q = require('q');
var mmProcessor = module.exports;


mmProcessor.verifyRating = function (rating, item) {
    return true;
};

mmProcessor.getRatingFromGoogleItem = function (item) {
    var deffered = Q.defer();
    var snippet = item.snippet;
    var match = snippet.match(/Review, [0-9][/][0-9]/g);
    if(match.length > 0  &&   mmProcessor.verifyRating(match[0], item)) {
        var rating = match[0].match(/[0-9][/][0-9]/g);
        deffered.resolve(rating[0]);
    }
    return deffered.promise;
};

module.exports = mmProcessor;
