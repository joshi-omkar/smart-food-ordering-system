import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../Styles/GenerateBill.css";
import ButtonForAllPurpose from "../ButtonForAllPurpose";
import { SERVER_URL } from "../../Utils/Constants";

const GenerateBill = () => {
  const { tableId } = useParams();
  const navigate = useNavigate()
  const [tableData, setTableData] = useState([]);

  const getData = async () => {
    await axios
      .get(`${SERVER_URL}/getOrders/${tableId}`)
      .then((res) => {
        console.log(res);
        setTableData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const reducedData = tableData.reduce((acc, order) => {
    return acc.concat(order.items);
  }, []);

  const itemCounts = reducedData.reduce((acc, item) => {
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

  const handlePayment = () => {
    navigate('/payment')
  }

  return (
    <div>
      <div className="total">
        <h3>You're Paying</h3>
        <p>&#x20b9;{bill}</p>
      </div>
      <div className="bill-table">
        <div className="h">
          <span className="i-name">Item Name</span>
          <span className="qty">Qty</span>
          <span className="q-rate">Sub Total</span>
        </div>
        {itemCounts.map((item, key) => {
          return (
            <div className="food">
              <div className="food-name-price">
                <span className="i-name">{item.dishName}</span>
                <span className="rate">&#x20b9;{item.dishPrice}</span>
              </div>
              <span className="qty">{item.count}</span>
              <span className="q-rate">
                &#x20b9;{item.count * item.dishPrice}
              </span>
            </div>
          );
        })}
        <div className="generatebill-divider"></div>
        <div className="t-h">
          <span className="t-i-name">Grand Total</span>
          <span className="t-q-rate">&#x20b9;{bill}</span>
        </div>
      </div>
      <div className="generate-button-cover-menu">
        <ButtonForAllPurpose
          onclick={handlePayment}
          text={"Make Payment"}
          marginTop="40px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default GenerateBill;
