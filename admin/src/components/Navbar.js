import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import Search from "../Assets/Search.png";
import Notification from "../Assets/Notification.png";
import Profile from "../Assets/Profile.png";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="left-container">
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: '#fff',
          }}
          to={`/`}
        >
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <h3>Order Up!</h3>
        </Link>
        <div className="navlink-contanier">
          <Link to="/">
            <span className="navlink">Home</span>
          </Link>
          <Link to="/tables">
            <span className="navlink">Tables</span>
          </Link>
          <Link to="/menu">
            <span className="navlink">Menu</span>
          </Link>
          <Link to="/orderHistory">
            <span className="navlink">Order History</span>
          </Link>
        </div>
      </div>
      <div className="icon-container">
        <span className="icon">
          <img src={Search} alt="Search" />
        </span>
        <span className="icon">
          <img src={Notification} alt="Notification" />
        </span>
        <span className="icon">
          <img src={Profile} alt="Profile" />
        </span>
      </div>
    </section>
  );
};

export default Navbar;
