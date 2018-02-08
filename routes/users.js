const expres = require('express');
const router = expres.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../accessDb/user');
const config = require('../config/database');

//Register
router.post('/register', (req, res, next) => {
    User.addUser(req.body, (err, result) => {
        if (err) {
            res.json({success: false, msg: 'failed to registser user'});
        } else {
            res.json({success: true, msg: 'user registerd successfully'});
        }
    })
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) 
            res.json({success: false, msg: err});
        if (!user) 
            res.json({success: false, msg: 'user not exist'});
        else {
            User.comparePassword(password, user.password, (err, isMatch) => {
                if (err) 
                    res.json({success: false, msg: err});
                if (isMatch) {
                    const token = 
                    jwt.sign(
                        {email:user.email,
                        username : user.username,
                        name : user,
                        _id : user._id}, config.secret, {
                        expiresIn: 200 //this is in second
                    });
                    res.json({success: true,
                         token: 'JWT '+ token,
                          user : {
                              id : user._id,
                              name : user.name,
                              email : user.email,
                              username : user.username
                          }
                        });
                } else 
                    res.json({success: false, msg: 'Password is incorrect'})
            });
        }

    })
})

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }) , (req, res, next) => {
    res.json({user : req.user}) 
})

module.exports = router;