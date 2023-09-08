import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import PreorderCard from "./PreorderCard";
import "../Styles/PreorderBooking.css";
import { SERVER_URL } from "../Utils/Constants";

const PreorderBooking = ({ tableStatus }) => {
  const [allPrebookOrders, setAllPrebookOrders] = useState([]);

  const getData = async () => {
    await axios
      .get(`${SERVER_URL}/getPrebookOrders`)
      .then((res) => {
        setAllPrebookOrders(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const userData = allPrebookOrders.map((user) => {
    const userInfo = user.userInfo;
    return userInfo;
  });

  const prebookOrders = allPrebookOrders.map((order) => {
    const preorder = order.items;
    const userInfo = order.userInfo;
    const itemsCount = preorder.reduce((acc, item) => {
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
          mobileNo: userInfo.mobileNo,
          userName: userInfo.name,
        });
      }
      return acc;
    }, []);

    return itemsCount;
  });

  let firstFalseKey = null;

  for (const key in tableStatus) {
    if (tableStatus.hasOwnProperty(key) && tableStatus[key]) {
      firstFalseKey = key;
      break;
    }
  }

  return (
    <div className="PreorderBooking">
      <h3>Pre-book Order</h3>
      <div>
        {prebookOrders.map((prebookOrder, key) => {
          return (
            <PreorderCard
              key={key}
              prebookOrder={prebookOrder}
              firstFalseKey={firstFalseKey}
              userData={userData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PreorderBooking;
