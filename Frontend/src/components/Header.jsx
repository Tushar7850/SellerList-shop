// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated, isAdmin, isSeller } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      navigate(`/products/search/${searchKeyword}`);
    } else {
      navigate('/products');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-indigo-600 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            SellerList Shop
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-grow max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search products..."
                className="w-full p-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-indigo-700 text-white rounded-r-lg hover:bg-indigo-800"
              >
                Search
              </button>
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/products" className="text-white hover:text-indigo-200">
              Products
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/cart" className="text-white hover:text-indigo-200 relative">
                  Cart
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
                
                <div className="relative group">
                  <button className="text-white hover:text-indigo-200">
                    {user.name}
                  </button>
                  <div className="absolute right-0 w-48 bg-white rounded-md shadow-lg py-1 mt-2 z-10 hidden group-hover:block">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-50"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-50"
                    >
                      My Orders
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-50"
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    {isSeller && (
                      <Link
                        to="/seller/products"
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-50"
                      >
                        My Products
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-indigo-200">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Search (Only visible on mobile) */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search products..."
              className="w-full p-2 rounded-l-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="px-4 bg-indigo-700 text-white rounded-r-lg hover:bg-indigo-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-3 py-3 border-t border-indigo-500 md:hidden">
            <div className="flex flex-col space-y-2">
              <Link
                to="/products"
                className="text-white hover:text-indigo-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/cart"
                    className="text-white hover:text-indigo-200 py-2 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cart
                    {itemCount > 0 && (
                      <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                  <Link
                    to="/profile"
                    className="text-white hover:text-indigo-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="text-white hover:text-indigo-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Orders
                  </Link>
                  {isAdmin && (
                    <Link
                      to="/admin/dashboard"
                      className="text-white hover:text-indigo-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  {isSeller && (
                    <Link
                      to="/seller/products"
                      className="text-white hover:text-indigo-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Products
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-indigo-200 py-2 text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-indigo-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 inline-block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;