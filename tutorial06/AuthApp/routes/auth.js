const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const CONFIG = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt =require('passport-jwt').ExtractJwt;

const jwtoptions = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:CONFIG.SECRET,
    issuer: CONFIG.JWT.ISSUER,
    audience:CONFIG.JWT.AUDIENCE,
};

passport.use('mmn-auth',new JwtStrategy(jwtoptions,(jwtPayload,done)=>{
    if(jwtPayload.auth.read){
        return done(null,jwtPayload.sub);
    } else {
        done(null, false);
    }
}));

//API endpoint to authenticate
router.post('/',(req,res)=>{
    const key = req.body.key || req.query.key;

    if(key === CONFIG.API_KEY){
        //we create a new JWT
        const tokem = jwt.sign({
            aud: jwtoptions.audience,
            iss: jwtoptions.issuer,
            auth:{read:true},
            sub:'mmn-user',
        },jwtoptions.secretOrKey);
        //And send it to the client
        res.json({token});
    }else{
        //otherwise the user is not authorized
        res.status(401).json({
            error:'Invalid API key',
        });
    }
});


module.exports = router;