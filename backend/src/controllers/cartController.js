// server/controllers/cartController.js
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate({
      path: 'items.product',
      select: 'name price imageUrl stock',
    });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
        total: 0,
      });
    }

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Verify product exists and has sufficient stock
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Not enough stock available' });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
        total: 0,
      });
    }

    // Check if product already in cart
    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

    if (itemIndex > -1) {
      // Product exists in cart, update quantity
      cart.items[itemIndex].quantity += quantity;
    } else {
      // Product does not exist in cart, add new item
      cart.items.push({
        product: productId,
        quantity,
        price: product.price,
      });
    }

    // Recalculate cart total
    cart.total = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    cart.updatedAt = Date.now();

    await cart.save();

    // Populate product details for response
    const updatedCart = await Cart.findById(cart._id).populate({
      path: 'items.product',
      select: 'name price imageUrl stock',
    });

    res.status(200).json(updatedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:itemId
// @access  Private
const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItemId = req.params.itemId;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the item in the cart
    const itemIndex = cart.items.findIndex((item) => item._id.toString() === cartItemId);

    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Verify product has sufficient stock
    const product = await Product.findById(cart.items[itemIndex].product);
    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Not enough stock available' });
    }

    // Update quantity
    cart.items[itemIndex].quantity = quantity;

    // Recalculate cart total
    cart.total = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    cart.updatedAt = Date.now();

    await cart.save();

    // Populate product details for response
    const updatedCart = await Cart.findById(cart._id).populate({
      path: 'items.product',
      select: 'name price imageUrl stock',
    });

    res.status(200).json(updatedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
// @access  Private
const removeCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.itemId;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Remove item from cart
    cart.items = cart.items.filter((item) => item._id.toString() !== cartItemId);

    // Recalculate cart total
    cart.total = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    cart.updatedAt = Date.now();

    await cart.save();

    // Populate product details for response
    const updatedCart = await Cart.findById(cart._id).populate({
      path: 'items.product',
      select: 'name price imageUrl stock',
    });

    res.status(200).json(updatedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getCart, addToCart, updateCartItem, removeCartItem };