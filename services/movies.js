/** 
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info :  
 * 
 */
var request = require('request');
var iwnServices = require('../modules/iwn/iwnServices');
var omdbServices = require('../modules/omdb/omdbServices');

var movies = function(req, res) {
    var searchText = req.query.q;
    iwnServices.getSearchResult(searchText).then(function(result) {
	res.json(result);
    }); 
}

//var movies = function(req, res) {
//    var searchText = req.query.q;
//    var id = req.query.id;
//    var title = req.query.title;
//    omdbServices.getMovieByIdAndTitle(id, title, null).then(function(result) {
//	res.json(result);
//    }); 
//}

module.exports = movies;
