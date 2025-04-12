
// src/context/CartContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
  getCart as fetchCart, 
  addToCart as apiAddToCart,
  updateCartItem as apiUpdateCartItem,
  removeCartItem as apiRemoveCartItem
} from '../utils/api';
import { useAuth } from './AuthContext';

// Create context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();

  // Fetch cart when user authenticates
  useEffect(() => {
    if (isAuthenticated) {
      loadCart();
    } else {
      // Clear cart when user logs out
      setCart({ items: [], total: 0 });
    }
  }, [isAuthenticated]);

  // Load cart from API
  const loadCart = async () => {
    if (!isAuthenticated) return;
    
    try {
      setLoading(true);
      setError(null);
      const cartData = await fetchCart();
      setCart(cartData);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  // Add item to cart
  const addToCart = async (productId, quantity) => {
    try {
      setLoading(true);
      setError(null);
      const updatedCart = await apiAddToCart(productId, quantity);
      setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add to cart');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update cart item quantity
  const updateItemQuantity = async (itemId, quantity) => {
    try {
      setLoading(true);
      setError(null);
      const updatedCart = await apiUpdateCartItem(itemId, quantity);
      setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update item');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const removeItem = async (itemId) => {
    try {
      setLoading(true);
      setError(null);
      const updatedCart = await apiRemoveCartItem(itemId);
      setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to remove item');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Clear cart after order is placed
  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addToCart,
        updateItemQuantity,
        removeItem,
        clearCart,
        itemCount: cart.items.reduce((count, item) => count + item.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};