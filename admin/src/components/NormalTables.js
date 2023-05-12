import React, { useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";

const TableStatus = ({ color, type }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.4rem",
      }}
    >
      <div
        style={{
          width: "45px",
          height: "30px",
          borderRadius: "4px",
          backgroundColor: color,
        }}
      ></div>
      <p>: </p>
      <p style={{ fontSize: "24px" }}>{type}</p>
    </div>
  );
};

const NormalTables = () => {
  const tableNo = [1, 2, 3, 4, 5, 6, 7, 8];
  const [allOrders, setAllOrders] = useState([]);

  const tableStatus = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
  };

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

  const tableOrder = (table) =>
    allOrders.filter((item) => Number(item.tableId) === table).reduce((acc, order) => {
      return acc.concat(order.items);
    }, []);
  console.log(tableOrder(4))

  // const bill = itemCounts.reduce((acc, order) => {
  //   const tableId = order.tableId;
  //   const total = order.items.reduce((sum, item) => {
  //     return sum + item.count * parseInt(item.dishPrice);
  //   }, 0);
  //   acc.tableId = acc.tableId ? acc.tableId + total : total;
  //   return acc;
  // }, []);

  // console.log(bill);

  // const riceTables = itemCounts.reduce((acc, curr) => {
  //   const tableId = curr.tableId;
  //   const hasRice = curr.items.some(
  //     (order) => order.currentCategory === "Rice"
  //   );
  //   acc.tableId = hasRice;
  //   return acc;
  // }, {});

  return (
    <div className="Normaltables">
      <div>
        <h3
          style={{ fontSize: "36px", fontWeight: "500", marginBottom: "30px" }}
        >
          Track Table Availability and Reservations
        </h3>
        <div
          style={{
            display: "flex",
            width: "550px",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <TableStatus color={"#B8FFB1"} type={"Occupied"} />
          <TableStatus color={"#FF364E"} type={"Almost Done"} />
          <TableStatus color={"#6EA8FF"} type={"Free"} />
        </div>
      </div>
      <div className="table-container">
        {tableNo.map((table, key) => {
          return (
            <>
              <Table
                // bill={bill}
                // riceTables={riceTables}
                tableOrder={tableOrder}
                table={table}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NormalTables;
