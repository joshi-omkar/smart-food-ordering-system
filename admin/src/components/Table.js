import React from "react";
import "../Styles/Table.css";
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

const Table = ({ tableOrder, table }) => {
  const navigate = useNavigate();

  const itemsByTableId = tableOrder(table).reduce((acc, item) => {
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

  const bill = itemsByTableId.reduce((sum, item) => {
    return sum + item.count * parseInt(item.dishPrice);
  }, 0);

  // const riceTables = itemsByTableId.reduce((acc, curr) => {
  const riceTables = itemsByTableId.filter(
    (item) => item.currentCategory === "Rice"
  );
  //   if (riceItems.length) {
  //     acc[curr.tableId] = (acc[curr.tableId] || []).concat(riceItems);
  //   }
  //   return acc;
  // }, {});

  console.log(riceTables, table);

  const handleClickOnGenerateBill = () => {
    navigate(`/generateBill/${table}`);
  };

  return (
    <div
      className="table"
      style={{
        backgroundColor:
          itemsByTableId.length === 0
            ? "#6EA8FF"
            : riceTables.length !== 0
            ? "#FF364E"
            : "#B8FFB1",
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
                  <Item
                    dishName={items.dishName}
                    dishPrice={items.dishPrice}
                    count={items.count}
                  />
                );
              })}
        </div>
        {/* <div className="divider"></div> */}
        <div className="total-conatiner">
          <span className="total">&#x20b9; {bill}</span>
          <button onClick={handleClickOnGenerateBill} className="generate-bill">
            Generate bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
