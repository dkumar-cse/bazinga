/** 
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info : Starting Point
 * 
 */
var request = require('request');
var iwnServices = require('../modules/iwn/iwnServices');

var movies = function(req, res) {
    var searchText = req.query.q;
    iwnServices.getSearchResult(searchText).then(function(result) {
	res.json(result);
    }); 
}

module.exports = movies;
