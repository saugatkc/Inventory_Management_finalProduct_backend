const express = require('express');
const Product = require('../models/products');
const auth = require('../auth');
const router = express.Router();


//post new product
router.route('/product')
.post((req,res,next) => {
    let product = new Product(req.body);
    product.product = req.body.product;
    product.cost = req.body.cost;
    product.description = req.body.description;
    product.stock = req.body.stock;
    product.save()
    .then((product) => {
        res.statusCode = 200;
        res.json(product);
    }).catch(next);



        
});

//get all the product
router.get('/product', (req,res,next)=>{
    Product.find({})
    .then((product) => {
        res.json(product);
    }).catch((err) => next(err));


});

//Updating product details 
router.route('/:id')
.put((req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((reply) => {
            if (reply == null) throw new Error("Product not found!");
            res.json(reply);
        }).catch(next);
})
.delete((req,res, next)=>{
    Product.findByIdAndDelete(req.params.id)
    .then((product) => {
        if (product == null) throw new Error("Product not found!");
                res.json(product);
    }).catch((err) => next(err));
})

module.exports = router;