const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Order = require("../models/Order");

const { protect } = require("../middlewares/authMiddleware"); // Optional: auth middleware

// Place a new order
router.post("/", protect, async (req, res) => {
  try {
    const {
      userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      paymentStatus,
    } = req.body;

    // Basic validation
    if (
      !userId ||
      !items ||
      !items.length ||
      !totalAmount ||
      !shippingAddress
    ) {
      return res.status(400).json({ message: "Missing required order fields" });
    }

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      paymentStatus: paymentStatus || "Pending",
    });

    await newOrder.save();
    await Cart.clearCart(userId);
    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error("Order placement error:", err.message);
    res
      .status(500)
      .json({ message: "Error placing order", error: err.message });
  }
});

// (Optional) Get orders for a user
router.get("/:userId", protect, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .sort({ createdAt: -1 })
      .populate("items._id"); // Populate product details for each item

    res.status(200).json(orders);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: err.message });
  }
});

// (Optional) Get a single order by ID
router.get("/details/:orderId", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching order", error: err.message });
  }
});


router.delete("/:orderId", protect, async (req, res) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
      if (!deletedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
  
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Failed to delete order", error: err.message });
    }
  });

module.exports = router;
