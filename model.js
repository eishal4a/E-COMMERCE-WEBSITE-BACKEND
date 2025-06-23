const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
