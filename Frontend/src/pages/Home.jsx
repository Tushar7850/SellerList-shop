// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../utils/api';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch featured products (could be filtered by a parameter in a real API)
        const featured = await getProducts('', 1, '');
        setFeaturedProducts(featured.products.slice(0, 4));
        
        // Fetch new arrivals (could be sorted by date in a real API)
        const arrivals = await getProducts('', 1, '');
        setNewArrivals(arrivals.products.slice(0, 8));
        
        // Set categories - in a real API this might be a separate endpoint
        setCategories([
          { name: 'Electronics', image: 'https://via.placeholder.com/300x200?text=Electronics', slug: 'electronics' },
          { name: 'Clothing', image: 'https://via.placeholder.com/300x200?text=Clothing', slug: 'clothing' },
          { name: 'Home & Garden', image: 'https://via.placeholder.com/300x200?text=Home+Garden', slug: 'home' },
          { name: 'Beauty & Health', image: 'https://via.placeholder.com/300x200?text=Beauty+Health', slug: 'beauty' },
          { name: 'Sports & Outdoors', image: 'https://via.placeholder.com/300x200?text=Sports', slug: 'sports' },
        ]);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-4">{error}</h2>
        <button
          onClick={() => window.location.reload()}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Quality Products from Verified Sellers
            </h1>
            <p className="text-lg mb-8">
              SellerList Shop connects you with the best products from trusted sellers worldwide.
            </p>
            <Link
              to="/products"
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-indigo-600 hover:text-indigo-800">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center font-medium">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I've found amazing products at great prices on SellerList Shop. The seller verification process really gives me peace of mind."
              </p>
              <div className="font-medium">Sarah T.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The checkout process was seamless and my items arrived even earlier than expected. Highly recommended!"
              </p>
              <div className="font-medium">Michael R.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "As a seller, I love how SellerList Shop connects me with customers who appreciate quality products. The platform is user-friendly and supportive."
              </p>
              <div className="font-medium">Jessica L.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Join Our Newsletter</h2>
          <p className="mb-6 max-w-xl mx-auto">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 w-full rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-700 px-6 py-3 rounded-r-md font-medium hover:bg-indigo-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;