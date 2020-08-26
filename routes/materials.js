const express = require('express');
const Material = require('../models/materials');
const auth = require('../auth');
const router = express.Router();


//post new material
router.route('/material')
.post((req,res,next) => {
    let material = new Material(req.body);
    material.product = req.body.product;
    material.stock = req.body.stock;
    material.save()
    .then((material) => {
        res.statusCode = 200;
        res.json(material);
    }).catch(next);
        
});

//get all the materials
router.get('/material', (req,res,next)=>{
    Material.find({})
    .then((material) => {
        res.json(material);
    }).catch((err) => next(err));


});

//Updating materials  
router.route('/:id')
.put((req, res, next) => {
    Material.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((reply) => {
            if (reply == null) throw new Error("Material not found!");
            res.json(reply);
        }).catch(next);
})
.delete((req,res, next)=>{
    Material.findByIdAndDelete(req.params.id)
    .then((material) => {
        if (material == null) throw new Error("Material not found!");
                res.json(material);
    }).catch((err) => next(err));
})


module.exports = router;