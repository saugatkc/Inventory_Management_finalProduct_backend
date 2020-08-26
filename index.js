const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const materialRouter = require('./routes/materials');
const dailyProductRouter = require('./routes/dailyProducts');
const materialIncomingRouter = require('./routes/materialsIncoming');
const productOutgoingRouter = require('./routes/productsOutgoing');

const dotenv = require('dotenv').config();


const auth = require('./auth');



const app = express();
app.use(morgan('tiny'));
app.use(express.json());

app.use(express.urlencoded({extended: true }));

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/hotels"));
app.use(express.static(__dirname + "/public/users"));
mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/materials', materialRouter);
app.use('/dailyProducts', dailyProductRouter);
app.use('/materialsIncoming', materialIncomingRouter);
app.use('/productsOutgoing', productOutgoingRouter);
app.use(auth.verifyUser);
// app.use(auth.verifyHotel);




app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});
