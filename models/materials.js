const mongoose = require('mongoose');

const materialsSchema = new mongoose.Schema({
    material:{
        type: String,
        required: true
    },
    stock:{
        type: String,
        required: true,
    }

}, {timestamps: true});

module.exports = mongoose.model('Materials', materialsSchema);