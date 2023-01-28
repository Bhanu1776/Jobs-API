const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const connectDBB = require("./db/connect");
const Product = require("./models/JobSchema");

const ProductJson = require("./jobs.json");

const start = async () => {
  try {
    await connectDBB(process.env.DATABASE);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
