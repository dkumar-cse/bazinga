/**
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info : Starting Point
 *
 */


var express = require("express");
var app = express();

var bodyParser = require('body-parser');

//configure App to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// LOAD and REGISTER All ROUTES
var router = require('./router');
app.use('/api', router);

// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendFile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


//START THE SERVER
//=============================================================================
app.listen(3000);
console.log('Magic happening on port 3000');
