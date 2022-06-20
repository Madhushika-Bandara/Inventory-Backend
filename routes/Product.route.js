const express = require('express');
const router =  express.Router();
const createError = require('http-errors');
const { default: mongoose } = require('mongoose');

const ProductController = require('../Controllers/Product.Controller');

//Display all the products
router.get('/', ProductController.getAllProducts) ;

//Add new product
router.post('/', ProductController.createNewProduct);


//Get a product by Id
router.get('/:id', ProductController.findProductById);

//Update a product
router.patch('/:id', ProductController.updateProduct);


//delete a product
router.delete('/:id', ProductController.deleteProductById);

module.exports = router;