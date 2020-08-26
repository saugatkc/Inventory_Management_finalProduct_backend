const express = require('express');
const DailyProduct = require('../models/dailyProducts');
const auth = require('../auth');
const router = express.Router();
router.route('/dailyProduct')




//posting new daily product
router.post('/dailyProduct', (req, res, next) => {
    let dailyProduct = new DailyProduct(req.body);
    dailyProduct.product = req.body.product;
    dailyProduct.quantity  = req.body.quantity;
    dailyProduct.damaged = req.body.damaged;
    dailyProduct.remaining = req.body.remaining;
    dailyProduct.save()
    .then((dailyProduct) => {
        res.statusCode = 200;
        res.json(dailyProduct);
    }).catch(next);
});
//geting all the daily product 
router.get('/dailyProduct', (req,res,next)=>{
    DailyProduct.find({})
    .populate('product')
    .then((dailyProduct) => {
        res.json(dailyProduct);
    }).catch((err) => next(err));

});

//Updating daily product  and deleting the daily product
router.route('/:id')
.put((req, res, next) => {
    DailyProduct.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((reply) => {
            if (reply == null) throw new Error("daily product not found!");
            res.json(reply);
        }).catch(next);
})
.delete((req,res, next)=>{
    DailyProduct.findByIdAndDelete(req.params.id)
    .then((dailyProduct) => {
        if (dailyProduct == null) throw new Error("daily product not found!");
                res.json(dailyProduct);
    }).catch((err) => next(err));
})



module.exports = router;