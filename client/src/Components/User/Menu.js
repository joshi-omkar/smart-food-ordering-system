import React, { useState, useEffect } from "react";
import "../../Styles/Menu.css";
import Rating from "../../Assets/Rating";
import ButtonForAllPurpose from "../ButtonForAllPurpose";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Search from "../../Assets/search";

const Item = ({
  dishName,
  dishDescription,
  dishPrice,
  id,
  setCart,
  imageUrl,
  cart,
  currentCategory,
}) => {
  const [num, setNum] = useState(0);

  const addItem = () => {
    setNum(num + 1);
    setCart([
      ...cart,
      { id, dishName, dishDescription, dishPrice, currentCategory },
    ]);
  };

  const removeItem = () => {
    setNum(num - 1);
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <div className="item-container">
      <img className="item-img" src={imageUrl} alt={dishName} border="0" />
      <div className="divider"></div>
      <div className="info-container">
        <div className="bestseller">bestseller</div>
        <div className="label">{dishName}</div>
        <div className="price">Rs. {dishPrice}</div>
        <div className="item-description">({dishDescription})</div>
        <Rating />
        <div className="rate-count">1,536 Ratings</div>
      </div>
      <div
        className={` duration-500 h-8 py-3 ${
          num === 0 ? null : "pad-trans"
        } order-count-conatiner`}
      >
        {num === 0 ? null : (
          <>
            <span
              style={{ cursor: "pointer" }}
              className=""
              onClick={removeItem}
            >
              &#8722;
            </span>
            <span className="">{num}</span>
          </>
        )}
        <span style={{ cursor: "pointer" }} className="" onClick={addItem}>
          &#43;
        </span>
      </div>
    </div>
  );
};

const Menu = ({ cart, setCart }) => {
  const [allDishes, setAllDishes] = useState([]);
  // const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState(allDishes);
  const [selectedCategory, setSelectedCategory] = useState("");

  const baseURL = "http://localhost:3001/getItem";
  const navigate = useNavigate();
  const { tableId } = useParams();
  const getData = () => {
    axios.get(baseURL).then((response) => {
      setAllDishes(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const Category = ({ children }) => {
    return (
      <div
        onClick={() => handleCategoryFilter(`${children}`)}
        className="category"
      >
        {children}
      </div>
    );
  };

  const handleCategoryFilter = (category) => {
    setSearchTerm("");
    if(category === "All"){
      setSelectedCategory("");
    }
    else{
      setSelectedCategory(category);
      filterDishes(category.toLowerCase());
    }
    
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterDishes(term);
  };

  const filterDishes = (filterTerm) => {
    const filtered = allDishes.filter(
      (dish) =>
        dish.dishName.toLowerCase().includes(filterTerm) ||
        dish.currentCategory.toLowerCase().includes(filterTerm)
    );
    setFilteredDishes(filtered);
  };

  const renderDishes = () => {
    const itemsToRender =
      searchTerm || selectedCategory ? filteredDishes : allDishes;
    return (
      <>
        {itemsToRender ? (
          <>
            {itemsToRender.map((dish, key) => {
              return (
                <Item
                  dishName={dish.dishName}
                  dishDescription={dish.dishDescription}
                  dishPrice={dish.dishPrice}
                  key={dish._id}
                  id={dish._id}
                  imageUrl={dish.imageUrl}
                  setCart={setCart}
                  cart={cart.length === 0 ? localStorageCart : cart}
                  currentCategory={dish.currentCategory}
                />
              );
            })}
          </>
        ) : (
          <div>
            <h3>Please Contact Manager</h3>
          </div>
        )}
      </>
    );
  };

  localStorage.setItem("cart", JSON.stringify(cart));
  const localStorageCart = JSON.parse(localStorage.getItem("cart"));

  const handleOnClickSendToKitchen = () => {
    navigate(`/confirmOrder/${tableId}`);
  };

  return (
    <div>
      <div className="title">Hey Foodies! Welcome to our Restaurant.</div>
      <div className="input-conatiner">
        <input
          type="text"
          placeholder="Find for some dilicious food.."
          className="text-input"
          onChange={handleSearch}
          value={searchTerm}
        />
        <div className="input-btn">
          <Search />
        </div>
      </div>
      <div className=" category-container">
        <Category>All</Category>
        <Category>Roti</Category>
        <Category>Rice</Category>
        <Category>Sabji</Category>
        <Category>Chinese</Category>
      </div>
      <h3 className="popular">Our popular</h3>
      <div className="item-containers">{renderDishes()}</div>
      <div className="button-cover-menu">
        <ButtonForAllPurpose
          text={"Send To Kitchen"}
          marginTop="0px"
          width={"100%"}
          onclick={handleOnClickSendToKitchen}
        />
      </div>
    </div>
  );
};

export default Menu;
