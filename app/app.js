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



//START THE SERVER
//=============================================================================
app.listen(3000);
console.log('Magic happening on port 3000');
