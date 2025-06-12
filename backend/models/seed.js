require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log("Connected to MongoDB");

  const sampleProducts = [
    { name: "Apple", category: "Fruit", price: 1.2, image: "apple.jpg", description: "Fresh red apples" },
    { name: "Chicken", category: "Meat", price: 5.5, image: "chicken.jpg", description: "Organic chicken meat" },
    { name: "Carrot", category: "Vegetable", price: 0.8, image: "carrot.jpg", description: "Crunchy carrots" },
  ];

  await Product.insertMany(sampleProducts);
  console.log("✅ Sample products added");
  process.exit();
})
.catch(err => console.error("❌ DB Error:", err));
