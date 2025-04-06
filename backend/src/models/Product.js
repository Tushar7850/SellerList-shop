const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  main_img: { type: String, required: true },
  item_img_1: { type: String },
  item_img_2: { type: String },
  item_img_3: { type: String },
  item_img_4: { type: String },
  price: { type: Number, required: true },
  old_price: { type: Number },
  price_off: { type: Number },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
