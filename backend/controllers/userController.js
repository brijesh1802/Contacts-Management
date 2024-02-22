const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req, res) => {
    const{username,email,password}=req.body;
    if(!username||!email||!password){
        return res.status(400).json({message: "Please enter all fields"});
    }
    const userAvail=await User.findOne({email});
    if(userAvail){
        return res.status(400).json({message: "Email already exists"});
    }
    //Hash
    const hashPass = await bcrypt.hash(password, 10);
    //console.log("Hashed Password",hasPass);
    const user = await User.create({username,email,password:hashPass});
    console.log(`User created ${user}`);
    if(user)
    {
        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
        });
    }
    else{
        res.status(400);
        throw new Error('Invalid user data');
    }
    res.json({message:"Register the user"});
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(400).json({message: "Please enter all fields"});
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password, user.password))){
        const token=jwt.sign({
            user:{
                _id:user._id,
                username:user.username,
                email:user.email
            },
        },process.env.JWT_SECRET,{expiresIn:"15m"});
    res.json(token);
    }
else{
    res.status(400).json({message: "Invalid credentials"});
}
});

//@desc Current user
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async(req, res) => {
    res.json(req.user);
});

module.exports = {registerUser, loginUser, currentUser}

