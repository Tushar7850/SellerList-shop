const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getMyOrders,
  updateOrderToPaid,
} = require('../controllers/orderController');
const { protect } = require('../middlewares/auth');
// const { protect } = require('../middlewares/auth');
protect
router.route('/')
  .post(protect, createOrder);

router.route('/myorders')
  .get(protect, getMyOrders);

  router.route('/:id')
  .get(protect, getOrderById);

router.route('/:id/pay')
  .put(protect, updateOrderToPaid);

module.exports = router;