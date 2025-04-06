const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Optional: Base64 image validation helper
const isValidBase64Image = (str) => {
  return /^data:image\/(png|jpeg|jpg|webp);base64,/.test(str);
};

// Add new product
router.post("/add", async (req, res) => {
  try {
    const { name, main_img, price, category } = req.body;

    // Required field checks
    if (!name || !main_img || !price || !category) {
      return res.status(400).json({ message: "Name, main image, price, and category are required." });
    }

    // Optional: Validate Base64 image format
    if (!isValidBase64Image(main_img)) {
      return res.status(400).json({ message: "Invalid image format for main image." });
    }

    const newItem = new Product(req.body);
    await newItem.save();

    res.status(201).json({ message: "Item added successfully", item: newItem });
  } catch (error) {
    console.error("Error adding item:", error.message);
    res.status(500).json({ message: "Error adding item", error: error.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const items = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error.message);
    res.status(500).json({ message: "Error fetching items", error: error.message });
  }
});

module.exports = router;
