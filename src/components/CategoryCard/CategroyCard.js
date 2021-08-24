import React from "react";

import "./category-card.css";

const CategoryCard = ({ image, title }) => {
  return (
    <div>
      <div>
        <img src={image} alt="Category" className="category-image" />
      </div>
      <p className="paragraph1 bold category-title mt-2">{title}</p>
    </div>
  );
};

export default CategoryCard;
