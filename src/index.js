const app = require('express')()
const express = require("express");
const bodyParser = require('body-parser')
const PORT = 8080
const db  =  require(  './database');
console.log(db);
const jobposts = db.jobposts
const user = db.users 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/jobposts', (req, res) => {
    console.log('Sending Posts..');
        console.log(jobposts);
        res.send(jobposts);
    
    
})

app.get('/user', (req, res) => {
    res.send(users[0])
})

app.listen(PORT, () => {
    console.log(`Running Dowun server on ${PORT}`)
})