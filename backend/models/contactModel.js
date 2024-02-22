const mongoose = require('mongoose');

const contactSchema =  mongoose.Schema(
    {
        user_id:{
            type:Number,
            required: true,
            ref:'User',
        },
    name: 
    { 
        type: String, 
        required: [true,"Please add Name"] 
    },
    email: 
    { 
        type: String,
         unique: true,
          required: [true,"Please add Email Address"] 
    },
    phone:
    {
    type: Number,
    required:[true,"Please add Phone Number"]
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Contact', contactSchema);