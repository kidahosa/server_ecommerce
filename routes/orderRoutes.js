const express = require("express");

const Order = require("../models/order");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE ORDER 
router.post("/", authMiddleware, async (req, res) => {
  try {

    const order = await Order.create({
      user: req.user.id,
      products: req.body.products,
      totalPrice: req.body.totalPrice
    });

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


module.exports = router