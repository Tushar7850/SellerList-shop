import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice, calculateRatingStars } from '../utils/helpers';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const {
    _id,
    name,
    price,
    description,
    imageUrl,
    stock,
    rating,
    numReviews,
    category,
    seller,
    reviews,
  } = product;

  const stars = calculateRatingStars(rating);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=products/' + _id);
      return;
    }

    try {
      await addToCart(_id, quantity);
      // Show success message or open cart sidebar
      alert('Product added to cart!');
    } catch (error) {
      // Show error message
      alert(error.response?.data?.message || 'Failed to add to cart');
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={imageUrl || `https://via.placeholder.com/500?text=${name}`}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {stars.map((star, index) => (
                <span key={index}>
                  {star === 'full' ? (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ) : star === 'half' ? (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                      <path
                        fill="#e5e7eb"
                        d="M12 17.27V2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  )}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({numReviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-gray-900 mb-4">
            {formatPrice(price)}
          </div>

          {/* Availability */}
          <div className="mb-4">
            <span className="font-medium text-gray-700">Availability: </span>
            {stock > 0 ? (
              <span className="text-green-600">{stock} in stock</span>
            ) : (
              <span className="text-red-600">Out of stock</span>
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <span className="font-medium text-gray-700">Category: </span>
            <span className="text-gray-600">{category}</span>
          </div>

          {/* Seller */}
          <div className="mb-6">
            <span className="font-medium text-gray-700">Seller: </span>
            <span className="text-gray-600">{seller?.name || 'Unknown'}</span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Description:</h3>
            <p className="text-gray-700">{description}</p>
          </div>

          {/* Add to Cart */}
          {stock > 0 && (
            <div className="flex items-center">
              <div className="mr-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max={stock}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-20 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="p-6 border-t border-gray-200 mt-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        
        {reviews && reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review._id} className="border-b border-gray-200 pb-6">
                <div className="flex items-center mb-2">
                  <div className="font-medium text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500 ml-4">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < review.rating ? (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;