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

const NormalTables = ({ tableNo, tableStatus }) => {
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
  }, [allOrders, setAllOrders]);

  const tableOrder = (table) =>
    allOrders
      .filter((item) => Number(item.tableId) === table)
      .reduce((acc, order) => {
        return acc.concat(order.items);
      }, []);

  const tableId = tableNo.map((table) => {
    return allOrders.filter((item) => Number(item.tableId) === table);
  });

  tableId.map((tables) => {
    return tables.forEach((item) => {
      const { tableId } = item;
      tableStatus[tableId] = false;
      if (!tableId) {
        tableStatus[tableId] = true;
      }
    });
  });

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
              <Table key={table} tableOrder={tableOrder} table={table} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NormalTables;
