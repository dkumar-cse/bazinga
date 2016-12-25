/**
 * @author : DivyaKumar
 * @date : 15 Dec 2016
 * @info : Starting Point ( SEVRER )
 *
 */

require("./config/envConfig");

var express = require("express");
var app = express();

var bodyParser = require('body-parser');

//configure App to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// LOAD and REGISTER All ROUTES
var apiRouter = require('./apiRouter');
app.use('/api', apiRouter);

//  get App Root
var pathsplit = __dirname.split("/");
pathsplit[pathsplit.length - 1] = "";
var appRootPath = pathsplit.join("/");


// application -------------------------------------------------------------
app.get('/movies', function(req, res) {
    res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('*', function(req, res) {
    console.log(req.url);
    res.sendFile( appRootPath + req.url); // load the single view file (angular will handle the page changes on the front-end)
});


//START THE SERVER
//=============================================================================
app.listen(3000);
console.log('Magic happening on port 3000');
