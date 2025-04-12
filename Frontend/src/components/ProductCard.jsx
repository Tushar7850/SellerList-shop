// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, calculateRatingStars } from '../utils/helpers';

const ProductCard = ({ product }) => {
  const { _id, name, price, imageUrl, rating, numReviews } = product;
  const stars = calculateRatingStars(rating);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${_id}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl || `https://via.placeholder.com/300?text=${name}`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/products/${_id}`}>
          <h2 className="text-lg font-medium text-gray-900 hover:text-indigo-600 mb-1">
            {name}
          </h2>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {stars.map((star, index) => (
              <span key={index}>
                {star === 'full' ? (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ) : star === 'half' ? (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                    <path
                      fill="#e5e7eb"
                      d="M12 17.27V2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                )}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({numReviews} reviews)</span>
        </div>
        
        {/* Price */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-900">{formatPrice(price)}</span>
          <Link 
            to={`/products/${_id}`}
            className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;