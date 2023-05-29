import React, { useState, useEffect } from "react";
import "../Styles/GenerateBill.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../Assets/tick.json";

const GenerateBill = () => {
  const { tableId } = useParams();
  const [allOrders, setAllOrders] = useState([]);
  const [billGenerated, setBillGenerated] = useState(false);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getData = () => {
    axios
      .get(`http://localhost:3001/getOrders/${tableId}`)
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const tableOrder = allOrders.reduce((acc, order) => {
    return acc.concat(order.items);
  }, []);

  const itemCounts = tableOrder.reduce((acc, item) => {
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
        currentCategory: item.currentCategory,
      });
    }
    return acc;
  }, []);

  const bill = itemCounts.reduce((sum, item) => {
    return sum + item.count * parseInt(item.dishPrice);
  }, 0);

  const handleOnClickGenerateBill = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3001/deleteOrder/${tableId}`)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setBillGenerated(true);
        }, 1000);
        setTimeout(() => {
          navigate("/tables");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  const ConfirmOrderStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#252836",
    borderRadius: "12px",
    textAlign: "center",
    padding: "20px",
    fontSize: "24px",
  };

  return (
    <div className="generatebill">
      <div>
        <section className="bill-container">
          <header className="header-container">
            <p className="t-name">Table No. {tableId} </p>
            <p className="order-no">
              Order No. 89 , Total items {itemCounts.length}
            </p>
            <p className="t-stamp">24-april-2023 20:23 till 21:19</p>
            <p className="b-no">Club Bill : 20222023-24-4 </p>
          </header>
          <div className="hotel-info">
            <p className="h-name">Hotel Brahma Garden</p>
            <p className="addr">
              Vishal Heights, 2, Sinhgad Rd, Manik Baug, Pune, Maharashtra
              411051
            </p>
            <p className="p-no">96821 65315</p>
          </div>
          <div className="bill-table">
            <div className="h">
              <span className="i-name">Item Name</span>
              <span className="qty">Qty</span>
              <span className="rate">Rate</span>
              <span className="q-rate">Q*Rate</span>
            </div>
            {itemCounts.map((item, key) => {
              return (
                <div className="food">
                  <span className="i-name">{item.dishName}</span>
                  <span className="qty">{item.count}</span>
                  <span className="rate">{item.dishPrice}</span>
                  <span className="q-rate">
                    {item.count}*{item.dishPrice}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="sub">
            <p>Sub Total : {bill}</p>
            <p>GST no : 1865522 </p>
          </div>
          <div className="total">Grand Total : &#x20b9;{bill}</div>
          <div className="footer-container">
            <p>** Thank You for visiting **</p>
          </div>
        </section>
      </div>
      <div className="generatebill-buttons">
        <button>Add Item</button>
        <button>Remove Item</button>
        <button>Add Tip</button>
        <button>Print Bill</button>
        <button type="submit" onClick={handleOnClickGenerateBill}>
          Generate Bill
        </button>
      </div>
      {billGenerated ? (
        <div style={ConfirmOrderStyle}>
          <Lottie options={defaultOptions} height={350} width={350} />
          <div>
            <h3>Bill Generated</h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GenerateBill;
