const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/' , (req,res)=>{
    res.send('this is the error and we should fix that later');
})

const port = 3001;

app.listen(port , ()=>{
    console.log('we are listening on port number : ' + port);
})