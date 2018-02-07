const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

//config file that use to access to the database
const config = require('./config/database');

//bodyparser middleware
app.use(bodyParser.json());

//connecting to the database
mongoose.connect(config.database);

//succeeful connection
mongoose.connection.on('connected' ,()=>{
    console.log('successfully connect to ',config.database);
})

//catching the error while to connect to database
mongoose.connection.on('error' ,(error)=>{
    console.log(error.message);
})

//Cors middleware
app.use(cors());

//setup the static folder that we should use for the angular file
app.use(express.static(path.join(__dirname , 'public')));

//add the user router
app.use('/users' , users);


app.get('/' , (req,res)=>{
    res.sendFile('index.html');
})

const port = 3001;

app.listen(port , ()=>{
    console.log('we are listening on port number : ' + port);
})