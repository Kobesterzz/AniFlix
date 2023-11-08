import React from 'react';
import './categories.css'

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="category">
        {/* Category Image */}
        <img src="category-image-1.jpg" alt="Category 1" />

        {/* Category Info */}
        <div className="category-info">
          <h3>Category Title</h3>
          <p>Category Description</p>
        </div>
      </div>

      {/* Add more category items here */}
    </div>
  );
};

export default Categories;
