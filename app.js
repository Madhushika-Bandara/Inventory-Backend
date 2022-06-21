const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//initiate DB
require('./initDB')();

app.all('/test/:id/:name', (req, res) =>{
    // console.log(req.query);
    // res.send(req.query.name);
    // res.send(req.query);
    console.log(req.params);
    res.send(req.params);
});

const ProductRoute = require('./routes/Product.route');

app.use('/products', ProductRoute);

app.use((req, res, next) => {
    // const err =  new Error("Not Found");
    // err.status = 404;
    // next(err);

    next(createError(404, "Not Found"));
});

//error handler
app.use((err, req, res, next) => {
    res.status(err. status || 500)
    res. send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(5000, ()=>{
    console.log("Server started on port " + PORT);
});