const mongoose = require('mongoose');
const config = require('../config/database');

//User schema
const userSchema = mongoose.Schema({
    name:{
        type : String
    },
    email : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('User' , userSchema);