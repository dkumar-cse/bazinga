
var _ = require('lodash');

var movieDetailsJson = function(){}

movieDetailsJson.prototype = {

    id: null,
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

    title : null,
    setTitle : function (title) {
      this.title = title;
    },

    year : null,
    setYear : function (year) {
      this.year = year;
    },

    status : null,
    setStatus : function (status) {
      this.status = status;
    },

    tagline : null,
    setTagline : function (tagline) {
      this.tagline = tagline;
    },

    adult : false,
    setAdult : function (adult) {
      this.adult = adult;
    },

    backdropPic : null,
    setBackdropPic : function (backdropPic) {
      this.backdropPic = backdropPic;
    },

    posterPics : [],
    setPosterPics : function (posterPics) {
      this.posterPics = posterPics;
    },
    addPosterPic : function (posterPic) {
      this.posterPics = this.posterPics.concat(this.posterPics, posterPic);
    },


    budget : null,
    setBudget : function (budget) {
      this.budget = budget;
    },

    genres : [],
    setGenres : function (genres) {
        this.genres = [];
        this.genres = this.genres.concat(genres);;
    },
    addGenre : function(genre) {
      this.genres = this.genres.concat(genre);
    },


    homepage : null,
    setHomepage : function(homepage) {
      this.homepage = homepage;
    },

    originalLanguage : null,
    setOriginalLanguage : function(originalLanguage) {
      this.originalLanguage = originalLanguage;
    },

    originalTitle : null,
    setOriginalTitle : function(originalTitle) {
      this.originalTitle = originalTitle;
    },

    overview : null,
    setOverview : function(overview) {
      this.overview = overview;
    },

    popularity : null,
    setPopularity : function(popularity) {
      this.popularity = popularity;
    },

    productionCompanies : [],
    setProductionCompanies : function(productionCompanies) {
      this.productionCompanies = productionCompanies;
    },
    addProductionCompany : function(productionCompany) {
      this.productionCompanies = this.productionCompanies.concat(productionCompanies);
    },


    productionCountries : [],
    setProductionCountries : function(productionCountries) {
      this.productionCountries = productionCountries;
    },
    addProductionCountry : function(productionCountry) {
      this.productionCountries = this.productionCountries.concat(productionCountry);
    },

    releaseDate : null,
    setReleaseDate : function(releaseDate) {
      this.releaseDate = releaseDate;
    },

    revenue : null,
    setRevenue : function(revenue) {
      this.revenue = revenue;
    },

    duration : null,
    setDuration : function(duration) {
      this.duration = duration;
    },

    spokenLanguages : [],
    setSpokenLanguages : function(spokenLanguages) {
      this.spokenLanguages = spokenLanguages;
    },
    addSpokenLanguages : function(spokenLanguage) {
      this.spokenLanguages = this.spokenLanguages.concat(spokenLanguage);
    },

    voteAverage : null,
    setVoteAverage : function(voteAverage) {
      this.voteAverage = voteAverage;
    },

    voteCount : null,
    setVoteCount : function(voteCount) {
      this.voteCount = voteCount;
    },

    plot : null,
    setPlot : function(plot) {
      this.plot = plot;
    },

    description : null,
    setDescription : function(description) {
      this.description = description;
    },

    certificate : null,
    setCertificate : function (certificate) {
      this.certificate = certificate;
    },

    awardInfo : null,
    setAwardInfo : function (awardInfo) {
        this.awardInfo = awardInfo;
    },

    awards : [],
    setAwards : function (awards) {
      this.awards = awards;
    },
    addAwards : function(award) {
      this.awards = this.awards.concat(award);
    },

    directors : [],
    setDirectors : function(directors) {
      this.directors = directors;
    },
    addDirector : function(director) {
      this.directors = this.directors.concat(director);
    },

    writers : [],
    setWriters : function(writers) {
      this.writers = writers;
    },
    addWriter : function(writer) {
      this.writers = this.writers.concat(writer);
    },

    casts : [],
    setCasts : function(casts) {
      this.casts = casts;
    },
    addCast : function(cast) {
      this.casts = this.casts.concat(cast);
    },

    images : [],
    setImages : function(images) {
      this.images = images;
    },
    addImage : function(image) {
      this.images = this.images.concat(this.images, image);
    },

    reviews : [],
    setReviews : function(reviews) {
      this.reviews = reviews;
    },
    addReview : function(review) {
      this.reviews = this.reviews.conact(this.reviews, review);
    },

    // TMDB
    tmdbVoteCount : null,
    tmdbVoteAverage : null,
    setTmdbVoteCount : function(tmdbVoteCount) {
      this.tmdbVoteCount = tmdbVoteCount;
    },
    setTmdbVoteAverage : function(tmdbVoteAverage) {
      this.tmdbVoteAverage = tmdbVoteAverage;
    },

    // IMDB
    imdbRating : null,
    imdbVotes : null,

    setImdbRating : function(imdbRating) {
      this.imdbRating = imdbRating;
    },
    setImdbVotes : function(imdbVotes) {
      this.imdbVotes = imdbVotes;
    },

    // imdb.wemakesites.net
    iwnReview : null,
    iwnRating : null,
    setIwnReview : function(iwnReview) {
      this.iwnReview = iwnReview;
    },
    setIwnRating : function(iwnRating) {
      this.iwnRating = iwnRating;
    },


    // DNAIndia
    dnaRating : null,
    dnaReviews : null,

    setDnaRating : function(dnaRating) {
      this.dnaRating = dnaRating;
    },
    setDnaReviews : function(dnaReviews) {
      this.dnaReviews = dnaReviews;
    },


    // Times of India
    toiRating : null,
    toiReviews : null,

    setToiRating : function(toiRating) {
      this.toiRating = toiRating;
    },
    setToiReviews : function(toiReviews) {
      this.toiReviews = toiReviews;
    },


    // The Indian Express
    tieRating : null,
    tieReviews : null,

    setTieRating : function(tieRating) {
      this.tieRating = tieRating;
    },
    setTieReviews : function(tieReviews) {
      this.tieReviews = tieReviews;
    },


    // Hindustan Times
    htRating : null,
    htReviews : null,

    setHTRating : function(htRating) {
      this.htRating = htRating;
    },
    setHTReviews : function(htReviews) {
      this.htReviews = htReviews;
    },


    // Bollywood Hungama
    bhRating : null,
    bhReviews : null,

    setBHRating : function(bhRating) {
      this.bhRating = bhRating;
    },
    setBHReviews : function(bhReviews) {
      this.bhReviews = bhReviews;
    },



    // Rotten Tommatoes - ( get from OMDB)
    tomatoMeter : null,
    setTomatoMeter : function(tomatoMeter) {
      this.tomatoMeter = tomatoMeter;
    },

    tomatoRating : null,
    setTomatoRating : function(tomatoRating) {
      this.tomatoRating = tomatoRating;
    },

    tomatoReviews : null,
    setTomatoReviews : function(tomatoReviews) {
      this.tomatoReviews = tomatoReviews;
    },

    tomatoFresh : null,
    setTomatoFresh : function(tomatoFresh) {
      this.tomatoFresh = tomatoFresh;
    },

    tomatoRotten : null,
    setTomatoRotten : function(tomatoRotten) {
      this.tomatoRotten = tomatoRotten;
    },

    tomatoConsensus : null,
    setTomatoConsensus : function(tomatoConsensus) {
      this.tomatoConsensus = tomatoConsensus;
    },

    tomatoUserMeter : null,
    setTomatoUserMeter : function(tomatoUserMeter) {
      this.tomatoUserMeter = tomatoUserMeter;
    },

    tomatoUserRating : null,
    setTomatoUserRating : function(tomatoUserRating) {
      this.tomatoUserRating = tomatoUserRating;
    },

    tomatoUserReviews : null,
    setTomatoUserReviews : function(tomatoUserReviews) {
      this.tomatoUserReviews = tomatoUserReviews;
    },

    tomatoURL : null,
    setTomatoURL : function(tomatoURL) {
      this.tomatoURL = tomatoURL;
    }

};

module.exports = movieDetailsJson;
