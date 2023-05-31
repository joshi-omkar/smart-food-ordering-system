import React, { useState } from "react";
import Rating from "../../Assets/Rating";
import "../../Styles/ItemDetals.css";
import { PeopleAlsoTry } from "./ConfirmOrder";
import "../../Styles/ConfirmOrder.css";
import RatingBig from "../../Assets/RatingBig.png";

const Item = () => {
  const [num, setNum] = useState(0);

  const addItem = () => {
    setNum(num + 1);
  };
  const removeItem = () => {
    setNum(num - 1);
  };
  return (
    <div className="item-detail-container">
      <div className="bestseller">bestseller</div>
      <img
        className="item-details-img"
        src="https://imgtr.ee/images/2023/04/19/0v1Ul.png"
        alt="Matar"
        border="0"
      />
      <div className="info-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="detail-label">Bombay Style Pav Bhaji</div>
          <div
            className={` duration-500 h-8 py-3 ${
              num === 0 ? null : "pad-trans"
            } details-order-count-conatiner`}
          >
            {num === 0 ? null : (
              <>
                <span className="" onClick={removeItem}>
                  &#8722;
                </span>
                <span className="">{num}</span>
              </>
            )}
            <span className="" style={{ fontSize: "1.2rem" }} onClick={addItem}>
              &#43;
            </span>
          </div>
        </div>
        <div className="detail-price">Rs. 100</div>
        <div className="detail-item-description">
          (Simmered in butter and aromatic spices, Butter Pav [2 Pieces] )
        </div>
      </div>
    </div>
  );
};

const ItemDetails = () => {
  return (
    <div>
      <Item />
      <div className="details-rating-container">
      <img
        src={RatingBig}
        alt="Rating"
        className="RatingBig"
      />
        <div className="detail-rate-count">
          <p>1,536 Ratings</p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#1F1D2B",
          borderRadius: "12px",
          padding: "20px",
          marginTop: '30px'
        }}
      >
        <PeopleAlsoTry />
      </div>
    </div>
  );
};

export default ItemDetails;
