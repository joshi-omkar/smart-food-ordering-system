import React, { useState, useEffect } from "react";
import "../Styles/GenerateBill.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const GenerateBill = () => {
  const { tableId } = useParams();

  const [allOrders, setAllOrders] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3001/getOrders")
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

  const itemCounts = allOrders.map((order, key) => {
    order = JSON.parse(order.items);
    const itemsCount = order.reduce((acc, item) => {
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
          tableId: item.tableId,
          currentCategory: item.currentCategory,
        });
      }
      return acc;
    }, []);

    return itemsCount;
  });

  const bill = itemCounts.reduce((acc, order) => {
    const tableId = order[0].tableId;
    const total = order.reduce((sum, item) => {
      return sum + item.count * parseInt(item.dishPrice);
    }, 0);
    acc[tableId] = acc[tableId] ? acc[tableId] + total : total;
    return acc;
  }, []);

  const itemsByTableId = itemCounts.filter((item) =>
    item.some((i) => Number(i.tableId) === Number(tableId))
  );

  return (
    <div className="generatebill">
      <div>
        <section className="bill-container">
          <header className="header-container">
            <p className="t-name">Table No. {tableId} </p>
            <p className="order-no">Order No. 89 , Total items 3</p>
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
            {itemsByTableId.map((items, key) => {
              return(
               <>
                {items.map((item, key) => {
                    console.log(item)
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
                </>
              )
            })}
          </div>
          <div className="sub">
            <p>Sub Total : {bill[tableId]}</p>
            <p>GST no : 1865522 </p>
          </div>
          <div className="total">Grand Total : {bill[tableId]}</div>
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
        <button>Generate Bill</button>
      </div>
    </div>
  );
};

export default GenerateBill;
