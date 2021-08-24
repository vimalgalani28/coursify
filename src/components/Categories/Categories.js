import React from "react";
import CategoryCard from "../CategoryCard/CategroyCard";

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      <p className="category-title heading5 bold mb-3">Top Categories</p>
      <div className="grid md:grid-cols-4 xs:grid-cols-2 gap-x-4 gap-y-5">
        {categories.map((category) => (
          <div key={category.title}>
            <CategoryCard title={category.title} image={category.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
