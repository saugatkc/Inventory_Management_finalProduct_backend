const mongoose = require('mongoose');

const productOutgoingSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    customer:{
        type: String,
        required: true
    },

    phone:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required:true
        
    },

    quantity:{
        type: String,
        required:true
        
    },

    totalCost:{
        type: String,
        required:true
        
    },

    dispatched:{
        type: Boolean,
        default: false
        
    }

}, {timestamps: true});

module.exports = mongoose.model('ProductOutgoing',productOutgoingSchema);