import React, { useState } from "react";
import "../Styles/MenuCategories.css";

const Category = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`category ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <p>{name}</p>
    </button>
  );
};

const MenuCategories = ({ setCurrentCategory, dishes, setFilter }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleCategoryClick = (index) => {
    setActiveIndex(index);
  };

  const filterByCategory = (categoryName) => {
    const dishesByCategory = dishes.filter(
      (dish) => dish.currentCategory === categoryName
    );
    setFilter(dishesByCategory);
  };

  const categories = [
    { name: "Roti" },
    { name: "Sabji" },
    { name: "Rice" },
    { name: "Chinese" },
  ];

  return (
    <div className="MenuCategories">
      <div>
        {categories.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            isActive={index === activeIndex}
            onClick={() => {
              handleCategoryClick(index);
              setCurrentCategory(category.name);
              filterByCategory(category.name);
            }}
          />
        ))}
      </div>
      <button className="category">
        <p>Add Category</p>
      </button>
    </div>
  );
};

export default MenuCategories;
