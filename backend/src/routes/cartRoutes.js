const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Get cart for a user
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      "items.productId",
      "name price main_img"
    ); // populate and select only needed fields

    const formattedCart = {
      userId: cart?.userId,
      items:
        cart?.items.map((item) => ({
          _id: item._id,
          quantity: item.quantity,
          size: item.size,
          name: item.productId?.name,
          price: item.productId?.price,
          main_img: item.productId?.main_img,
        })) || [],
    };

    res.status(200).json(formattedCart);
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ error: "Failed to get cart" });
  }
});

// Add to cart
router.post("/add", async (req, res) => {
  const { userId, productId, quantity, size } = req.body;

  if (quantity <= 0)
    return res.status(400).json({ error: "Quantity must be greater than 0" });

  if (!size) return res.status(400).json({ error: "Size is required" });

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity, size }],
      });
    } else {
      const index = cart.items.findIndex(
        (item) => item.productId.toString() === productId && item.size === size
      );

      if (index > -1) {
        cart.items[index].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity, size });
      }
    }

    await cart.save();
    res
      .status(200)
      .json({ items: cart.items, totalQuantity: cart.items.length });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});


// Update item quantity
router.put("/update", async (req, res) => {
  const { userId, productId, quantity, size } = req.body;

  if (quantity <= 0)
    return res.status(400).json({ error: "Quantity must be greater than 0" });

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    // Fix the comparison
    // const item = cart.items.find(
    //   (item) =>
    //     item.productId.toString() === productId.toString() &&
    //     item.size === size
    // );

        const item = cart.items.find(
      (item) =>
        item._id.toString() === productId.toString() &&
        item.size === size
    );

    console.log(item);
    

    if (item) {
      item.quantity = quantity;
      await cart.save();
      return res.status(200).json({ items: cart.items });
    }

    res.status(404).json({ error: "Item not found in cart" });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update quantity" });
  }
});


// Remove item
router.delete("/remove", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item._id.toString() !== productId.toString()
    );
    await cart.save();
    res.status(200).json({ items: cart.items });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove item" });
  }
});

// Clear all items
router.delete("/clear/:userId", async (req, res) => {
  try {
    await Cart.findOneAndUpdate({ userId: req.params.userId }, { items: [] });
    res.status(200).json({ message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear cart" });
  }
});

module.exports = router;
