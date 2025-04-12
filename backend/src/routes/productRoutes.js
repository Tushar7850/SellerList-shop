const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, seller } = require('../middlewares/auth');

router.route('/')
  .get(getProducts)
  .post(protect, seller, createProduct);

router.route('/:id')
  .get(getProductById)
  .put(protect, seller, updateProduct)
  .delete(protect, seller, deleteProduct);

module.exports = router;