const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Optional: Base64 image validation helper
const isValidBase64Image = (str) => {
  return /^data:image\/(png|jpeg|jpg|webp);base64,/.test(str);
};

router.get("/names", async (req, res) => {
  try {
    const names = await Product.find({}, "name");
    console.log("names :",names);
    
    res.status(200).json(names); // [{ _id, name }]
  } catch (error) {
    console.error("Error fetching product names:", error.message);
    res.status(500).json({ message: "Failed to fetch product names" });
  }
});


router.post("/add", async (req, res) => {
  try {
    const {
      name,
      main_img,
      price,
      category,
      old_price,
      price_off,
      item_img_1,
      item_img_2,
      item_img_3,
      item_img_4,
    } = req.body;

    // Required field checks
    if (!name || !main_img || !price || !category) {
      return res.status(400).json({
        message: "Name, main image, price, and category are required.",
      });
    }

    // Optional: Validate Base64 image format
    if (!isValidBase64Image(main_img)) {
      return res.status(400).json({
        message:
          "Invalid image format for main image. Please provide a valid Base64 image.",
      });
    }

    // Optional: Validate price fields (should be numbers)
    if (
      typeof price !== "number" ||
      (old_price && typeof old_price !== "number") ||
      (price_off && typeof price_off !== "number")
    ) {
      return res
        .status(400)
        .json({ message: "Price, old price, and price off must be numbers." });
    }

    // Optional: Validate optional image fields (if provided)
    if (
      [item_img_1, item_img_2, item_img_3, item_img_4].some(
        (img) => img && !isValidBase64Image(img)
      )
    ) {
      return res.status(400).json({
        message: "One or more optional images are in an invalid format.",
      });
    }

    // Create a new product item
    const newItem = new Product({
      name,
      main_img,
      price,
      category,
      old_price,
      price_off,
      item_img_1,
      item_img_2,
      item_img_3,
      item_img_4,
    });

    // Save the product to the database
    await newItem.save();

    res.status(201).json({ message: "Item added successfully", item: newItem });
  } catch (error) {
    console.error("Error adding item:", error.message);
    res
      .status(500)
      .json({ message: "Error adding item", error: error.message });
  }
});

router.get("/categories/:wearType", async (req, res) => {
  const wearType = req.params.wearType;
  try {
    const categories = await Product.distinct("category", {
      wearType: wearType,
    });
    console.log("categories", categories);

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching categories", error: error.message });
  }
});

router.get("/random", async (req, res) => {
  try {
    const count = parseInt(req.query.count) || 4;

    const randomProducts = await Product.aggregate([
      { $sample: { size: count } },
      {
        $project: {
          _id: 1,
          name: 1,
          price: 1,
          main_img: 1,
          category: 1,
          old_price: 1,
          price_off: 1,
        },
      },
    ]);

    res.status(200).json(randomProducts);
  } catch (err) {
    console.error("Error fetching random products:", err.message);
    res.status(500).json({ message: "Failed to fetch random products" });
  }
});


router.get("/search", async (req, res) => {
  try {
    const keyword = req.query.q;

    if (!keyword || keyword.trim() === "") {
      return res.status(400).json({ message: "Search query is required" });
    }

    const regex = new RegExp(keyword, "i"); // case-insensitive
    const products = await Product.find({
      $or: [{ name: regex }, { category: regex }],
    }).select("name price main_img category");

    if (!products.length) {
      return res.status(404).json({ message: "No products found matching your search" });
    }

    res.status(200).json(products);
  } catch (err) {
    console.error("Search error:", err.message);
    res.status(500).json({ message: "Failed to search products" });
  }
});



router.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    res.status(500).json({ message: "Failed to fetch product by ID" });
  }
});


// Get all products
router.get("/:wearType/:category", async (req, res) => {
  try {
    const { wearType, category } = req.params;
    let items = [];

    if (category === "All") {
      items = await Product.find({ wearType }).sort({ createdAt: -1 });
    } else {
      items = await Product.find({ wearType, category }).sort({
        createdAt: -1,
      });
    }

    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching items", error: error.message });
  }
});

module.exports = router;
