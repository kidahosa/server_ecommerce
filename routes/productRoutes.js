const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// CREATE PRODUCT 
router.post("/create-product", async (req, res) => {
  try {
    const product = await product.create(req.body);

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET PRODUCTS 
router.post("/fetch-products", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router