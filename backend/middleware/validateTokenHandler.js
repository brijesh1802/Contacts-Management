const asyncHandler =  require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req, res, next) => { 
    let token;
    let authHeader = req.headers.authorization||req.headers.Authorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error('Not authorized, token failed');
            }
            req.user = decoded.user;
            next();
            // if (decoded.user && decoded.user.hasOwnProperty('id')) {
            //     req.user = decoded.user;
            //     next();
            // } else {
            //     res.status(401);
            //     throw new Error('Not authorized, user id missing');
            // }
        });
    }
    if(!token){
        res.status(401);
        throw new Error('Not authorized, no token');
    }
    
});


module.exports = validateToken;