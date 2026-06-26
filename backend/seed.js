import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");

    // Delete old products
    await Product.deleteMany();

    // Insert new products
    await Product.insertMany(products);

    console.log("✅ Sample Products Added");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });