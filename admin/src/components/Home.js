import React, { useState } from "react";
import RevenueChart from "./RevenueChart";
import PreorderBooking from "./PreorderBooking";
import "../Styles/Home.css";
import Tooltip1 from '../Assets/Tooltip1'
import Tooltip2 from '../Assets/Tooltip2'
import Tooltip3 from '../Assets/Tooltip3'
import Tooltip4 from '../Assets/Tooltip4'

const Home = () => {
  return (
    <div className="Home">
      <div className="dashboard">
        <div className="dashboard-widgits">
          <Tooltip1/>
          <Tooltip2/>
          <Tooltip3/>
          <Tooltip4/>
        </div>
        <RevenueChart />
      </div>
      <PreorderBooking />
    </div>
  );
};

export default Home;
