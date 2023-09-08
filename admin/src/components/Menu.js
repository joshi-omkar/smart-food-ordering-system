import React, { useState, useEffect } from "react";
import MenuCategories from "./MenuCategories";
import MenuItemContainer from "./MenuItemContainer";
import "../Styles/MenuCategories.css";
import axios from "axios";
import { SERVER_URL } from "../Utils/Constants";

const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const baseURL = `${SERVER_URL}/getItem`;
  const [dishes, setDishes] = useState([]);
  const [filter, setFilter] = useState([]);

  const getData = () => {
    axios.get(baseURL).then((response) => {
      setDishes(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Menu">
      <MenuCategories
        setCurrentCategory={setCurrentCategory}
        dishes={dishes}
        setFilter={setFilter}
      />
      <MenuItemContainer currentCategory={currentCategory} dishData={filter.length === 0 ? dishes : filter} />
    </div>
  );
};

export default Menu;
