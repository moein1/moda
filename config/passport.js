const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../accessDb/user');
const config = require('../config/database');


module.exports = (passport)=>{
    const opt = {};
    opt.jwtFromRequest =ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opt.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opt , (jwt_payload,done)=>{
        User.getUserById(jwt_payload.name._id ,(err,user)=>{            
            console.log(user);
            if(err)
                return done(err , false);

            if(user)
                return done(null , user);
             else
                return done(null , false);
        })
    }));
}
