<<<<<<< HEAD
require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");
const createProducts = require("./products.json");
=======
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
require("dotenv").config();
const Product = require("./models/product");
const products = require("./products.json");
>>>>>>> fb92b1a6edf8d60f51dcdca8ce6a8371d2b04d8b

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
<<<<<<< HEAD
    await Product.create(createProducts);
    console.log("Success!!!");
=======
    await Product.create(products);
    console.log("Success!");
>>>>>>> fb92b1a6edf8d60f51dcdca8ce6a8371d2b04d8b
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
<<<<<<< HEAD
=======

>>>>>>> fb92b1a6edf8d60f51dcdca8ce6a8371d2b04d8b
start();
