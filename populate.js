const mongoose = require("mongoose");
const connectDB = require("./db/connect");
require("dotenv").config();
const Product = require("./models/product");
const products = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(products);
    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
