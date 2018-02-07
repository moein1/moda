const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

//Cors middleware
app.use(cors());

//add the user router
app.use('/users' , users);

//bodyparser middleware
app.use(bodyParser.json());
app.get('/' , (req,res)=>{
    res.send('this is the error and we should fix that later');
})

const port = 3001;

app.listen(port , ()=>{
    console.log('we are listening on port number : ' + port);
})