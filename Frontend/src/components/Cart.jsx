import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

const Cart = () => {
  const { cart, loading, updateItemQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/products"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await updateItemQuantity(itemId, newQuantity);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to update quantity');
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await removeItem(itemId);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to remove item');
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        
        {/* Cart Items */}
        <div className="space-y-6">
          {cart.items.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center border-b border-gray-200 pb-6"
            >
              {/* Product Image */}
              <div className="w-24 h-24 flex-shrink-0 mr-6 mb-4 sm:mb-0">
                <img
                  src={item.product.imageUrl || `https://via.placeholder.com/96?text=${item.product.name}`}
                  alt={item.product.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow">
                <Link
                  to={`/products/${item.product._id}`}
                  className="text-lg font-medium text-gray-900 hover:text-indigo-600"
                >
                  {item.product.name}
                </Link>
                <div className="text-gray-600 mt-1">
                  Price: {formatPrice(item.price)}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center mt-4 sm:mt-0">
                <button
                  onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  disabled={item.quantity <= 1}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
                <span className="mx-4 w-10 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  disabled={item.quantity >= item.product.stock}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>

              {/* Subtotal */}
              <div className="font-medium text-gray-900 ml-6 mt-4 sm:mt-0">
                {formatPrice(item.price * item.quantity)}
              </div>

              {/* Remove */}
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="ml-6 text-red-500 hover:text-red-700 focus:outline-none mt-4 sm:mt-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium text-gray-900">Subtotal</span>
            <span className="text-2xl font-bold text-gray-900">{formatPrice(cart.total)}</span>
          </div>
          <div className="text-gray-600 mb-6 text-sm">
            Shipping, taxes, and discounts calculated at checkout.
          </div>
          <div className="flex justify-between">
            <Link
              to="/products"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
            >
              Continue Shopping
            </Link>
            <button
              onClick={handleCheckout}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;