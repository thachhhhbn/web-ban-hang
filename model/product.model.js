const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id:Number,
  title:String,
  price:Number,
  thumbnail:String
});

const Product = mongoose.model("product", productSchema, "products");

module.exports = Product;
