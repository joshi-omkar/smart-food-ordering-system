import React, { useEffect, useState } from "react";
import EditForm from "./EditForm";
import axios from "axios";
import Rating from "../Assets/Rating";

const ItemCard = ({ dishName, dishDescription, dishPrice, imageUrl }) => {
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
    </div>
  );
};

const MenuItemContainer = ({ currentCategory, dishData }) => {
  const [clickedOnEdit, setClickedOnEdit] = useState(false);
  const [clickedOnAddItem, setClickedOnAddItem] = useState(false);

  const handleOnClickEdit = (e) => {
    e.preventDefault();
    setClickedOnEdit(!clickedOnEdit);
  };

  const handleOnClickCancleEdit = (e) => {
    e.preventDefault();
    setClickedOnEdit(!clickedOnEdit);
  };

  const handleOnClickAddItem = (e) => {
    e.preventDefault();
    setClickedOnAddItem(!clickedOnAddItem);
  };
  return (
    <div className="MenuItemContainer">
      <div className="title-button-container">
        <h3>Control Your Restaurant's Menu</h3>
        {clickedOnEdit ? (
          <div className="edit-button-container">
            <button onClick={handleOnClickAddItem}>
              <p>Add Items</p>
            </button>
            <button>
              <p>Save Changes</p>
            </button>
            <button onClick={handleOnClickCancleEdit}>
              <p>X</p>
            </button>
          </div>
        ) : currentCategory !== "All" ? (
          <button onClick={handleOnClickEdit}>
            <p>Edit</p>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="MenuItemContainerMain">
        {dishData ? (
          <>
            {dishData.map((dish, key) => {
              return (
                <ItemCard
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
            <h3>Add Dishes</h3>
          </div>
        )}
      </div>
      <EditForm
        clickedOnAddItem={clickedOnAddItem}
        handleOnClickAddItem={handleOnClickAddItem}
        currentCategory={currentCategory}
      />
    </div>
  );
};

export default MenuItemContainer;
