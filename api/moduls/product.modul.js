const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    name: { type: String, required: true, maxLength: 100 }, 
    option: { type: Array, default: [] }, 
    image: { type: String, required: true } 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
