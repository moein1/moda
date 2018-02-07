const expres = require('express');
const router  = expres.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../accessDb/user');


//Register
router.post('/register' ,(req,res ,next)=>{
    User.addUser(req.body,(err,result)=>{
        if(err){
            res.json({success : false , msg : 'failed to registser user'});
        }else{
            res.json({success : true , msg : 'user registerd successfully'});
        }
    })
});

//Authenticate
router.post('/authenticate' ,(req,res,next)=>{
    res.send('Authenticated');
} )

//Profile
router.get('/profile' , (req,res,next)=>{
    res.send('profile');
})


module.exports =router;