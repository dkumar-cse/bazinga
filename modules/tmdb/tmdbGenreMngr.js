

var redis = require('redis');
client = redis.createClient();
var tmdbGenreManager = module.exports;


tmdbGenreManager.genreIdToTmdb = function (genreId) {
    var tmdbGenreId = client.get('tokenIdToTmdb_' + genreId);
};

tmdbGenreManager.tmdbGenreIdToId = function (tmdbGenreId) {
    var tmdbGenreId = client.get('TmdbGenreToToken_' + tmdbGenreId);
};


module.exports = tmdbGenreManager;
