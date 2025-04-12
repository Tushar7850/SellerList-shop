// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { login as apiLogin, register as apiRegister, getUserProfile } from '../utils/api';

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in from local storage on initial load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (token && storedUser) {
        try {
          // Verify token validity by fetching user profile
          setUser(JSON.parse(storedUser));
          const userData = await getUserProfile();
          setUser(userData);
        } catch (err) {
          // Token is invalid, clear storage
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
          setError('Authentication expired. Please login again.');
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setError(null);
      const data = await apiLogin(email, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      setError(null);
      const data = await apiRegister(name, email, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  // Update user in context after profile update
  const updateUserInContext = (updatedUser) => {
    const updatedUserData = { ...user, ...updatedUser };
    localStorage.setItem('user', JSON.stringify(updatedUserData));
    setUser(updatedUserData);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        updateUserInContext,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        isSeller: user?.role === 'seller' || user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};