// src/pages/CheckoutPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../utils/api';
import { formatPrice } from '../utils/helpers';

const CheckoutPage = () => {
  const { cart, clearCart, loading: cartLoading } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Form fields
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'PayPal',
  });

  // Check if user is authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=checkout');
    }
  }, [isAuthenticated, navigate]);

  // Check if cart is empty
  useEffect(() => {
    if (cart.items.length === 0 && !cartLoading) {
      navigate('/cart');
    }
  }, [cart, cartLoading, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      
      const orderData = {
        orderItems: cart.items.map(item => ({
          product: item.product._id,
          name: item.product.name,
          qty: item.quantity,
          image: item.product.imageUrl,
          price: item.price,
        })),
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country,
        },
        paymentMethod: formData.paymentMethod,
        itemsPrice: cart.total,
        taxPrice: cart.total * 0.15,
        shippingPrice: cart.total > 100 ? 0 : 10,
        totalPrice: cart.total + (cart.total * 0.15) + (cart.total > 100 ? 0 : 10),
      };
      
      const createdOrder = await createOrder(orderData);
      clearCart();
      navigate(`/orders/${createdOrder._id}`);
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cartLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Calculate totals
  const itemsPrice = cart.total;
  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Shipping Address</h3>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-gray-700 mb-1">Postal Code</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-gray-700 mb-1">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Payment Method</h3>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="PayPal"
                      checked={formData.paymentMethod === 'PayPal'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>PayPal</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Stripe"
                      checked={formData.paymentMethod === 'Stripe'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>Credit Card</span>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                {loading ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-3 mb-6">
              {cart.items.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.product.name}</span>
                    <span className="text-gray-600 text-sm block">
                      Qty: {item.quantity}
                    </span>
                  </div>
                  <div className="font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Totals */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(itemsPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (15%)</span>
                <span>{formatPrice(taxPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{formatPrice(shippingPrice)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2 mt-2">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;