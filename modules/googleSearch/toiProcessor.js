
var Q = require('q');
var toiProcessor = module.exports;


toiProcessor.verifyRating = function (rating, item) {
    return true;
};

toiProcessor.getRatingFromGoogleItem = function (item) {
    var deffered = Q.defer();
    var searchString = item.snippet + "," + item.title;console.log(searchString);
    var match = searchString.match(/Review [{]*[0-9][.]*[0-9]*[/][0-9][}]*/g);
    if(match.length > 0  &&  toiProcessor.verifyRating(match[0], item)) {
        var rating = match[0].match(/[0-9][.]*[0-9]*[/][0-9]/g);
        deffered.resolve(rating[0]);
    }
    return deffered.promise;
};

module.exports = toiProcessor;
