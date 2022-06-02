const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: { type: String, required: [true, `Product name must be provided`] },
  price: { type: Number, required: [true, `Product price must be provided`] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Products name is a required field!"],
  },
  price: {
    type: Number,
    required: [true, "Product price is a required field!"],
  },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE is not supported!}",
    },
  },
});

module.exports = mongoose.model("Product", productsSchema);
