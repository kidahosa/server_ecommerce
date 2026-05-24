const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// CREATE PRODUCT 
router.post("/create-product", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json(newProduct);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET PRODUCTS 
router.get("/get-products", async (req, res) => {
  try {
    const Products = await Product.find();

    res.json(Products);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router