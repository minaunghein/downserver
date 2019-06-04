'use strict';

var _database = require('./database');

var app = require('express')();
var bodyParser = require('body-parser');
var PORT = 8080;

 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/jobposts', function (req, res) {
     
    console.log('Sending Posts....');
    
    setTimeout(function () {
        res.send(_database.jobposts);
    }, 2000);
});

app.get('/jobposts/trending', function (req, res) {
     
    console.log('Sending Trending Posts....');
    
    setTimeout(function () {
        res.send(_database.jobpoststrending);
    }, 2000);
});

 

app.listen(PORT, function () {
    console.log('Running Dowun server on ' + PORT);
});