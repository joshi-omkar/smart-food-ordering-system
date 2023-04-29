import React, { useState, useEffect } from "react";
import "../../Styles/Menu.css";
import Rating from "../../Assets/Rating";
import ButtonForAllPurpose from "../ButtonForAllPurpose";
import axios from "axios";

const Item = ({ dishName, dishDescription, dishPrice, imageUrl }) => {
  const [num, setNum] = useState(0);

  const addItem = () => {
    setNum(num + 1);
  };
  const removeItem = () => {
    setNum(num - 1);
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
            <span className="" onClick={removeItem}>
              &#8722;
            </span>
            <span className="">{num}</span>
          </>
        )}
        <span className="" onClick={addItem}>
          &#43;
        </span>
      </div>
    </div>
  );
};

const Category = ({ children }) => {
  return <div className="category">{children}</div>;
};

const Menu = () => {
  const [allDishes, setAllDishes] = useState([]);
  const baseURL = "http://localhost:3001/getItem";

  const getData = () => {
    axios.get(baseURL).then((response) => {
      setAllDishes(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="title">Hey Foodies ! Welcome to our Restaurant.</div>
      <div className="input-conatiner">
        <input
          type="text"
          placeholder="Find for some dilicious food.."
          className="text-input"
        />
        <div className="input-btn"></div>
      </div>
      <div className=" category-container">
        <Category>Roti</Category>
        <Category>Rice</Category>
        <Category>Sabji</Category>
        <Category>Chinese</Category>
      </div>
      <h3 className="popular">Our popular</h3>
      <div className="item-containers">
        {allDishes ? (
          <>
            {allDishes.map((dish, key) => {
              return (
                <Item
                  dishName={dish.dishName}
                  dishDescription={dish.dishDescription}
                  dishPrice={dish.dishPrice}
                  imageUrl={dish.imageUrl}
                />
              );
            })}
          </>
        ) : (
          <div>
            <h3>Please Contact Manager</h3>
          </div>
        )}
      </div>
      <div className="button-cover-menu">
        <ButtonForAllPurpose
          text={"Send To Kitchen"}
          marginTop="0px"
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default Menu;
