import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/ConfirmOrder.css";
import VegIcon from "../../Assets/VegIcon";
import Rating from "../../Assets/Rating";
import ButtonForAllPurpose from "../ButtonForAllPurpose";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YourOrder = () => {
  return (
    <div className="YourOrder">
      <div className="SeperateItem">
        <div className="OrderInfoContainer">
          <h3>Bombay Style Pav Bhaji</h3>
          <p>
            (Simmered in butter and aromatic spices, Butter Pav [2 Pieces] )
          </p>
        </div>
        <div className="ButtonAndPriceContainer">
          <div className="ButtonContainer">
            <button>
              <p>-</p>
            </button>
            <p>1</p>
            <button>
              <p>+</p>
            </button>
          </div>
          <h3>Rs. 100</h3>
        </div>
      </div>
      <div className="SeperateItem">
        <div className="OrderInfoContainer">
          <h3>Bombay Style Pav Bhaji</h3>
          <p>
            (Simmered in butter and aromatic spices, Butter Pav [2 Pieces] )
          </p>
        </div>
        <div className="ButtonAndPriceContainer">
          <div className="ButtonContainer">
            <button>
              <p>-</p>
            </button>
            <p>1</p>
            <button>
              <p>+</p>
            </button>
          </div>
          <h3>Rs. 100</h3>
        </div>
      </div>
      <div className="SeperateItem">
        <div className="OrderInfoContainer">
          <h3>Bombay Style Pav Bhaji</h3>
          <p>
            (Simmered in butter and aromatic spices, Butter Pav [2 Pieces] )
          </p>
        </div>
        <div className="ButtonAndPriceContainer">
          <div className="ButtonContainer">
            <button>
              <p>-</p>
            </button>
            <p>1</p>
            <button>
              <p>+</p>
            </button>
          </div>
          <h3>Rs. 100</h3>
        </div>
      </div>
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

const AddMoreOptionContainer = () => {
  return (
    <div className="AddMoreOptionContainer">
      <Link to={"/menu"}>
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


const ConfirmOrder = () => {
  return (
    <div className="confirmOrder">
      <h3>Your Order</h3>
      <div
        style={{
          backgroundColor: "#1F1D2B",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <YourOrder />
        <PeopleAlsoTry />
      </div>
      <AddMoreOptionContainer />
      <ButtonForAllPurpose text={"Send To Kitchen"} marginTop='40px' />
    </div>
  );
};

export default ConfirmOrder;
