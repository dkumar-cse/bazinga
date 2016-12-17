var _ = require('lodash');

var tokenJson = function(){}

tokenJson.prototype = {
    tokenId : null,
    tmdbId : null,
    value : null,

    setTokenId : function(tokenId) {
        this.tokenId = tokenId;
    },

    setTmdbId : function(tmdbId) {
        this.tmdbId = tmdbId;
    },

    setValue : function(value) {
        this.value = value;
    }
};

// var tokensJson = function(){}
//
// tokensJson.prototype = {
//     tokens : [],
//
//     setTokens : function(tokens) {
//         this.tokens = [];
//         this.tokens = this.tokens.concat([tokens]);
//     },
//     getTokens : function () {
//         return this.tokens;
//     },
//
//     addToken : function(tokenId, value, tmdbId) {
//         var token = new tokenJson();
//         token.setTokenId(tokenId);
//         token.setTmdbId(tmdbId);
//         token.setValue(value);
//
//         this.tokens = this.tokens.concat(token);
//     }
// };


module.exports = tokenJson;
