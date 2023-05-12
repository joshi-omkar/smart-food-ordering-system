import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../Styles/ConfirmOrder.css";
import VegIcon from "../../Assets/VegIcon";
import Rating from "../../Assets/Rating";
import ButtonForAllPurpose from "../ButtonForAllPurpose";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Confirmed } from "./OrderConfirm";

const YourOrder = ({ items, setCart }) => {
  const [num, setNum] = useState(0);

  const itemCounts = items.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.count += 1;
    } else {
      acc.push({
        id: item.id,
        dishName: item.dishName,
        dishDescription: item.dishDescription,
        dishPrice: item.dishPrice,
        count: 1,
      });
    }
    return acc;
  }, []);

  // const addItem = (item) => {
  //   setNum(num + 1);
  //   setCart([...items, {item}])

  // };

  // const removeItem = (id) => {
  //   setNum(num - 1);
  //   setCart(items.filter((item) => item.id !== id));
  // };

  return (
    <div className="YourOrder">
      {itemCounts.map((item, key) => {
        return (
          <div className="SeperateItem">
            <div className="OrderInfoContainer">
              <h3>{item.dishName}</h3>
              <p>({item.dishDescription})</p>
            </div>
            <div className="ButtonAndPriceContainer">
              {/* <div className="ButtonContainer">
            <button onClick={()=>{removeItem(item.id)}}>
              <p>-</p>
            </button>
            <p>1</p>
            <button onClick={()=>{addItem(item)}}>
              <p>+</p>
            </button>
            </div> */}
              <p>
                {item.count} x Rs. {item.dishPrice}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ItemCard = () => {
  return (
    <div className="ItemCard">
      <img
        src="https://imgtr.ee/images/2023/04/19/0v1Ul.png"
        alt="Matar"
        border="0"
      />
      <div className="name-icon">
        <h3 style={{ fontSize: "16px", marginTop: "5px" }}>Tava Pulav</h3>
        <VegIcon />
      </div>
      <div className="rating">
        <Rating />
        <p>576 Ratings</p>
      </div>
      <div className="rate-add">
        <h3>Rs. 100</h3>
      </div>
      <button>+</button>
    </div>
  );
};

const sliderSettings = {
  arrows: false,
  slidesToShow: 2.2,
  slidesToScroll: 1,
  infinite: false,
};

export const PeopleAlsoTry = () => {
  return (
    <div className="PeopleAlsoTry">
      <h3>People Also Try</h3>
      <Slider {...sliderSettings}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Slider>
    </div>
  );
};

const AddMoreOptionContainer = ({ tableId }) => {
  return (
    <div className="AddMoreOptionContainer">
      <Link to={`/menu/${tableId}`}>
        <div>
          <h3>Add More Dishes</h3>
        </div>
      </Link>
      <Link className="CookingIntructions">
        <div>
          <h3>Add Cooking Instructions</h3>
        </div>
      </Link>
    </div>
  );
};

const ConfirmOrder = ({ cart, setCart }) => {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const [confirmOrderAnimation, setConformOrderAimantion] = useState(false);

  const userInfo = localStorage.getItem("user");
  const localStorageCart = JSON.parse(localStorage.getItem("cart"));
  const handleSendToKitchen = () => {
    if (tableId === "prebook") {
      const preorderData = { items: [...cart], userInfo: userInfo };
      console.log(preorderData);
      axios
        .post("http://localhost:3001/prebook", preorderData)
        .then(function(response) {
          setConformOrderAimantion(true);
          console.log(response);
          localStorage.removeItem("cart");
          setCart([]);
          setTimeout(() => {
            navigate(`/menu/${tableId}`);
          }, 2000);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      const orderData = {items: [...cart], tableId: tableId}
      console.log(orderData)
      axios
        .put("http://localhost:3001/placeOrder", orderData)
        .then(function(response) {
          setConformOrderAimantion(true);
          console.log(response);
          localStorage.removeItem("cart");
          setCart([]);
          setTimeout(() => {
            navigate(`/cookingOnProcess/${tableId}`);
          }, 2000);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      {confirmOrderAnimation ? (
        <Confirmed />
      ) : (
        <div className="confirmOrder">
          <h3>Your Order</h3>
          <div
            style={{
              backgroundColor: "#1F1D2B",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <YourOrder items={cart} setCart={setCart} />
            <PeopleAlsoTry />
          </div>
          <AddMoreOptionContainer tableId={tableId} />
          <ButtonForAllPurpose
            onclick={handleSendToKitchen}
            text={"Send To Kitchen"}
            marginTop="40px"
          />
        </div>
      )}
    </>
  );
};

export default ConfirmOrder;
