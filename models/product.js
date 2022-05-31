const mongoose = require("mongoose");

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
      values: ["ikea", "liddy", "marcos", "caressa"],
      message: "Please enter a valid company name!",
    },
  },
  rating: { type: Number, default: 4.5 },
});

module.exports = mongoose.model("Product", ProductSchema);
