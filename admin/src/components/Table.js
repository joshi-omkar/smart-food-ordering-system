import React, { useState, useEffect } from "react";
import "../Styles/Table.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Item = ({ dishName, dishPrice, count }) => {
  return (
    <div className="item">
      <div className="conatiner-2">
        <span className="item-name">{dishName}</span>
        <span className="price">&#x20b9; {dishPrice}</span>
      </div>
      <div className="quantity">Qty {count}</div>
    </div>
  );
};

const Table = ({ itemCounts, table, bill, riceTables }) => {

  const navigate  = useNavigate();

  const itemsByTableId = itemCounts.filter((item) =>
    item.some((i) => Number(i.tableId) === table)
  );

  const handleClickOnGenerateBill = () =>{
    navigate(`/generateBill/${table}`)
  }

  return (
    <div
      className="table"
      style={{
        backgroundColor:
          itemsByTableId.length === 0
            ? "#6EA8FF"
            : (riceTables[table] ? '#FF364E' :'#B8FFB1'),
      }}
    >
      <div className="inner-container">
        <div>
          <div className="conatiner-1">
            <span className="table-no">Table No : {table}</span>
            <span className="expand"></span>
          </div>
          <div className="order-no">Order #251</div>
        </div>
        <div className="orders">
          {itemsByTableId.length === 0
            ? ""
            : itemsByTableId.map((items, key) => {
                return (
                  <>
                    {items.map((item, key) => {
                      return (
                        <Item
                          dishName={item.dishName}
                          dishPrice={item.dishPrice}
                          count={item.count}
                        />
                      );
                    })}
                  </>
                );
              })}
        </div>
        {/* <div className="divider"></div> */}
        <div className="total-conatiner">
          <span className="total">&#x20b9; {bill[table]}</span>
          <button onClick={handleClickOnGenerateBill} className="generate-bill">Generate bill</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
