const express = require('express');
const ProductOutgoing = require('../models/productsOutgoing');
const auth = require('../auth');
const router = express.Router();



//add product outgoing
router.post('/productOutgoing', (req, res, next) => {
    let productOutgoing = new ProductOutgoing(req.body);
    productOutgoing.product = req.body.product;
    productOutgoing.customer  = req.body.customer;
    productOutgoing.phone = req.body.phone;
    productOutgoing.address = req.body.address;
    productOutgoing.quantity = req.body.quantity;
    productOutgoing.totalCost = req.body.totalCost;
    productOutgoing.save()
        .then((productOutgoing) => {
            res.statusCode = 200;
            res.json(productOutgoing);
        }).catch(next);
    });

    //get products outgoing
router.get('/productOutgoing', (req, res, next) => {
    ProductOutgoing.find({})
        .populate('product')
        .then((productOutgoing) => {
            res.json(productOutgoing);
        }).catch((err) => next(err));

});

//Updating products outgoing  and deleting the products outgoing
router.route('/:id')
.put((req, res, next) => {
    ProductOutgoing.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((reply) => {
            if (reply == null) throw new Error("product outgoing not found!");
            res.json(reply);
        }).catch(next);
})
.delete((req,res, next)=>{
    ProductOutgoing.findByIdAndDelete(req.params.id)
    .then((productOutgoing) => {
        if (productOutgoing == null) throw new Error("product outgoing not found!");
                res.json(productOutgoing);
    }).catch((err) => next(err));
})


module.exports = router;