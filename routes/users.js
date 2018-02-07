const expres = require('express');
const router  = expres.Router();

//Register
router.get('/register' ,(req,res ,next)=>{
    res.send('register');
});

//Authenticate
router.get('/authenticate' ,(req,res,next)=>{
    res.send('Authenticated');
} )

//Profile
router.get('/profile' , (req,res,next)=>{
    res.send('profile');
})

//Validate
router.get('/validate' , (req,res,next)=>{
    res.send('validate');
})

module.exports =router;