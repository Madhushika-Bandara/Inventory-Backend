const mongoose = require('mongoose');
const Product = require('../models/Product.model');
const createError = require('http-errors');


module.exports = {
    getAllProducts:async (req,res,next) => {
        try{
            const results = await Product.find({},{name:1,qty:1});
            res.send(results);
    
        }catch(error){
            console.log(error.message);
        }
    },

    createNewProduct: async (req, res, next) => {
        try{
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result);
        }catch(error){
            console.log(error.message);
            if(error.name === 'ValidationError') {
                next(createError(422, error.message));
                return;
            }
            next(error);
        }
    
        // const product = new Product({
        //     name: req.body.name,
        //     qty: req.body.qty,
        //     reOrderQty: req.body.reOrderQty
        // });
        // product.save()
        // .then(result =>{
        //     console.log(result);
        //     res.send(result);
        // })
        // .catch(err => {
        //     console.log(err.message);
        // });
      
    },


    findProductById: async (req, res, next) => {
        const id = req.params.id;
        //const pName = req.params.name;
        try{
            const product = await Product.findById(id);
            //const product = await Product.findOne({name:pName});
            if(!product){
                throw createError(404, "Product does not exit");
            }
            res.send(product);
        }catch(error){
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                next(createError(400, "Invalid Product ID"));
                return;
            }
            next(error);
        }
    },

    updateProduct: async (req, res, next) => {
        try{
            const id =  req.params.id;
            const updates = req.body;
            const options = {new:true};
            const results = await Product.findByIdAndUpdate(id,updates,options);
            if(!results) {
                throw createError(404, "Product does not exit");
            }
            
            res.send(results);
        }catch(error){ 
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                return next(createError(400, "Invalid Product Id"));
            }
            next(error);
        }
    },

    deleteProductById: async (req, res, next) => {
        const id = req.params.id;
        try{
            const result = await Product.findByIdAndDelete(id);
            if(!result){
                throw createError(404, "Product does not exit");
            }
            res.send(result);
        }catch(error){
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                next(createError(400, "Invalid Product ID"));
                return;
            }
            next(error);
        }
    }
}