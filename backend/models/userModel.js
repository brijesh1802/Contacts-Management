const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add Name"]
    },
    email: {
        type: String,
        unique: [true,"Email address already taken"],
        required: [true, "Please add Email Address"]
    },
    password: {
        type: String,
        required: [true, "Please add Password"]
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);