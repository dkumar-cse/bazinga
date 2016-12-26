

var _ = require('lodash');

var actorJson = function(){}

actorJson.prototype = {

    id:  null,
    setId : function(id) {
      this.id = id;
    },

    tmdbId : null,
    setTmdbId : function (tmdbId) {
      this.tmdbId = tmdbId;
    },

    imdbId : null,
    setImdbId : function (imdbId) {
      this.imdbId = imdbId;
    },

    adult : null,
    setAdult : function (adultCheck) {
        this.adult = adultCheck;
    },

    biography : null,
    setBiography : function(biography) {
        this.biography = biography;
    },

    dob : null,
    setDob : function (dob) {
        this.dob = dob;
    },

    deathday : null,
    setDeathday : function (deathday) {
        this.deathday = deathday;
    },

    gender : null,
    setGender : function (gender) {
        this.gender = gender;
    },

    homepage : null,
    setHomepage : function (homepage) {
        this.homepage = homepage;
    },

    name : null,
    setName : function (name) {
        this.name = name;
    },

    placeOfBirth : null,
    setPlaceOfBirth : function (placeOfBirth) {
        this.placeOfBirth = placeOfBirth;
    },

    popularity : null,
    setPopularity : function (popularity) {
        this.popularity = popularity;
    },

    profilePic : null,
    setProfilePic : function (profilePic) {
        this.doprofilePicb = profilePic;
    }
    
};

module.exports = actorJson;
