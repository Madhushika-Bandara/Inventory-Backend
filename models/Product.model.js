const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,

    },

    qty: {
        type: Number,
        required: true,

    },

    reOrderQty: {
        type: Number,
        required: true,

    }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;