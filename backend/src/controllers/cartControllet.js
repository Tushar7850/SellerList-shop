import Cart from "../models/Cart.js";

// 🟢 Get user's cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart || { userId: req.params.userId, items: [] });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

// 🟢 Add item to cart
export const addToCart = async (req, res) => {
  const { userId, product } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [product] });
    } else {
      const index = cart.items.findIndex((item) => item.id === product.id && item.size === product.size);

      if (index > -1) {
        cart.items[index].quantity += 1;
      } else {
        cart.items.push(product);
      }
    }

    await cart.save();
    res.json({ message: "Item added", cart });
  } catch (err) {
    res.status(500).json({ error: "Failed to add item" });
  }
};

// 🟡 Update quantity
export const updateQuantity = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const item = cart.items.find((item) => item.id === productId);
    if (item) item.quantity = quantity;

    await cart.save();
    res.json({ message: "Quantity updated", cart });
  } catch (err) {
    res.status(500).json({ error: "Failed to update quantity" });
  }
};

// 🔴 Remove item
export const removeItem = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter((item) => item.id !== productId);
    await cart.save();

    res.json({ message: "Item removed", cart });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove item" });
  }
};

// 🔴 Clear cart
export const clearCart = async (req, res) => {
  try {
    await Cart.findOneAndUpdate({ userId: req.params.userId }, { items: [] });
    res.json({ message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear cart" });
  }
};
