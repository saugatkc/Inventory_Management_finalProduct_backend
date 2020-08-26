const mongoose = require('mongoose');

const dailyProductSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type: String,
        required: true
    },

    damaged:{
        type: String,
        required: true
    },

    remaining:{
        type: String,
        required:true
        
    }

}, {timestamps: true});

module.exports = mongoose.model('DailyProduct',dailyProductSchema);