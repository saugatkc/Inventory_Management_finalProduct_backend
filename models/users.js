const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },

    contact:{
        type: String,
        required:true
        
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    admin: {
        type: Boolean,
        default: true
    }

}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);