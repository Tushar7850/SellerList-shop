// src/utils/helpers.js
// Format price to currency
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  // Calculate rating stars
  export const calculateRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push('full');
      } else if (i - 0.5 <= rating) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  };
  
  // Truncate text
  export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  // Get error message from error response
  export const getErrorMessage = (error) => {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  };
  
  // Generate placeholder image URL
  export const getPlaceholderImage = (width = 300, height = 300, text = 'Product Image') => {
    return `https://via.placeholder.com/${width}x${height}?text=${text.replace(/\s+/g, '+')}`;
  };