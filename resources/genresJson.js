var _ = require('lodash');

var genreJson = function(){}

genreJson.prototype = {
    id : null,
    tmdbId : null,
    name : null,

    setId : function(id) {
        this.id = id;
    },

    setTmdbId : function(tmdbId) {
        this.tmdbId = tmdbId;
    },

    setName : function(name) {
        this.name = name;
    }
};

var genresJson = function(){}

genresJson.prototype = {
    genres : {},

    setGenres : function(genres) {
        this.genres = genres;
    },

    addGenre : function(id, tmdbId, name) {
        var genre = new genreJson();
        genre.setId(id);
        genre.setTmdbId(tmdbId);
        genre.ssetName(name);

        this.genres = _.merge(this.genres, genre);
    }
};


module.exports = genresJson;
