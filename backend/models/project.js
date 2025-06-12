const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: Number,
  image: String,
  description: String,
  inStock: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
