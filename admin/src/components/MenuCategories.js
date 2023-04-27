import React, { useState } from "react";
import "../Styles/MenuCategories.css";

const Category = ({ link, setCurrentCategory }) => {
  const handleOnClickCategory = () => {
    setCurrentCategory(link);
  };

  return (
    <button onClick={handleOnClickCategory} className="CategoryLink">
      <p>{link}</p>
    </button>
  );
};

const MenuCategories = ({setCurrentCategory}) => {
  

  return (
    <div className="MenuCategories">
      <div>
        <Category link={"Roti"} setCurrentCategory={setCurrentCategory} />
        <Category link={"Sabji"} setCurrentCategory={setCurrentCategory} />
        <Category link={"Rice"} setCurrentCategory={setCurrentCategory} />
        <Category link={"Chinese"} setCurrentCategory={setCurrentCategory} />
      </div>
      <button className="CategoryLink">
      <p>Add Category</p>
    </button>
    </div>
  );
};

export default MenuCategories;
