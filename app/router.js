//  Routes

/** 
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info : Routes
 * 
 */

var express = require("express");
var router = express.Router();

var movies = require('../services/movies');

router.get('/', function(req, res) {
    movies(req, res);
});


module.exports = router;

/*
 * < way to call - require(router)(app); >
 * 
module.exports = function(app) {
    var router = express.Router();
    router.get('/', function(req, res) {
	    res.json({ message: 'hooray! welcome to our api!' });   
	});
    app.use('/api', router);
}
*/








