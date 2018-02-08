const bcrypt = require('bcryptjs');
const User = require('../models/user');


module.exports={
    getUserById:(id,callback)=>{
        User.findById(id,callback);
    },
    getUserByUsername : (username ,callback)=>{
        User.findOne({username : username} , callback);
    },
    addUser :(user,callback)=>{
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password , salt , (err,hash)=>{
                if(err)
                    callback(err);
                var newUser = new User({
                    name : user.name,
                    email : user.email,
                    username : user.username,
                    password : hash
                })
                newUser.save((err,res)=>{
                    if(err)
                        callback(err);
                    console.log(res);
                    callback(null,res);
                })
            })
        })
       
    },
    comparePassword : (password , hashPassword ,callback )=>{
        bcrypt.compare(password ,hashPassword ,(err, isMatch)=>{
            if(err)
                callback(err);
            callback(null , isMatch);
        })
    }
}