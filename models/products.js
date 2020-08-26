const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product:{
        type: String,
        required: true
    },
    cost:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    stock:{
        type: String,
        required:true
        
    }

}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema);