const mongoose = require('mongoose');

const materialsIncomingSchema = new mongoose.Schema({
    material:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Materials"
    },
    supplier:{
        type: String,
        required: true
    },

    phone:{
        type: String,
        required: true
    },

    quantity:{
        type: String,
        required:true
        
    },

    totalCost:{
        type: String,
        required:true
        
    },

    delivered:{
        type: Boolean,
        default: false
        
    }

}, {timestamps: true});

module.exports = mongoose.model('MaterialsIncoming',materialsIncomingSchema);