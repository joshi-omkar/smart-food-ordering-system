import React from "react";
import Table from "./Table";

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
        style={{ width: "45px", height: "30px", borderRadius:'4px', backgroundColor: color }}
      ></div>
      <p>: </p>
      <p style={{fontSize: '24px'}}>{type}</p>
    </div>
  );
};

const NormalTables = () => {
  return (
    <div className="Normaltables">
      <div>
        <h3 style={{fontSize: '36px', fontWeight: '500', marginBottom: '30px'}}>Track Table Availability and Reservations</h3>
        <div
          style={{
            display: "flex",
            width: "550px",
            justifyContent: "space-between",
            marginBottom: '30px'
          }}
        >
          <TableStatus color={"#B8FFB1"} type={"Occupied"} />
          <TableStatus color={"#FF364E"} type={"Almost Done"} />
          <TableStatus color={"#6EA8FF"} type={"Free"} />
        </div>
      </div> 
      <div className="table-container">
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    </div>
  );
};

export default NormalTables;
