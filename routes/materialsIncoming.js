const express = require('express');
const MaterialIncoming = require('../models/materialsIncoming');
const auth = require('../auth');
const router = express.Router();
router.route('/dailyProduct')




//route post by logged in users
router.post('/materialIncoming', (req, res, next) => {
    let materialIncoming = new MaterialIncoming(req.body);
    materialIncoming.material = req.body.material;
    materialIncoming.suplier  = req.body.suplier;
    materialIncoming.phone = req.body.phone;
    materialIncoming.quantity = req.body.quantity;
    materialIncoming.totalCost = req.body.totalCost;
    materialIncoming.save()
    .then((materialIncoming) => {
        res.statusCode = 200;
        res.json(materialIncoming);
    }).catch(next);
});


//get all materials incoming
router.get('/materialIncoming', (req,res,next)=>{
    MaterialIncoming.find({})
    .populate('material')
    .then((materialIncoming) => {
        res.json(materialIncoming);
    }).catch((err) => next(err));

});

//Updating materials incoming and deleting the materials incoming
router.route('/:id')
.put((req, res, next) => {
    MaterialIncoming.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((reply) => {
            if (reply == null) throw new Error("Material incoming not found!");
            res.json(reply);
        }).catch(next);
})
.delete((req,res, next)=>{
    MaterialIncoming.findByIdAndDelete(req.params.id)
    .then((material) => {
        if (material == null) throw new Error("Material Incoming not found!");
                res.json(material);
    }).catch((err) => next(err));
})


module.exports = router;