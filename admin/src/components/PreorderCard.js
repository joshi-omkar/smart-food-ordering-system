import React from "react";
import "../Styles/PreorderCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Item = ({ dishName, count }) => {
  return (
    <div className="pre-item-container">
      <span className="pre-order">{dishName}</span>
      <span className="pre-qty">{count}</span>
    </div>
  );
};

const PreorderCard = ({ prebookOrder, firstFalseKey }) => {

  const navigate  = useNavigate()

  const handleOnClickSendToKitchen = (e) => {
    e.preventDefault();
    const orderData = {
      items: prebookOrder,
      tableId: firstFalseKey,
    };
    const id = orderData.items[0].mobileNo;
    axios
      .put("http://localhost:3001/placeOrder", orderData)
      .then(function (response) {
        console.log(response);
        deletePreorder(id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deletePreorder = (id) => {
    axios
      .delete(`http://localhost:3001/deletePreorder/${id}`)
      .then((res) => {
        console.log(res);
        navigate(0)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pre-order-container">
      <div className="pre-user">
        <div className="pre-user-info">
          <span className="pre-user-name">{prebookOrder[0].userName}</span>
          <span className="pre-user-no">{prebookOrder[0].mobileNo}</span>
        </div>
        <div className="pre-head-count">4 People</div>
      </div>
      <div className="pre-divider"></div>
      <div className="pre-list">
        <div className="pre-header">
          <span className="pre-order">Order</span>
          <span className="pre-qty">Qty</span>
        </div>
        {prebookOrder.map((prebook, key) => {
          return (
            <>
              <Item dishName={prebook.dishName} count={prebook.count} />
            </>
          );
        })}
      </div>
      <div className="pre-divider"></div>
      <div className="pre-btn-container">
        <button
          onClick={handleOnClickSendToKitchen}
          className="pre-sendToKitchen"
        >
          Send to kitchen
        </button>
      </div>
    </div>
  );
};

export default PreorderCard;
