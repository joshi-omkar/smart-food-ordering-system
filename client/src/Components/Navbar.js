import React from "react";
import Logo from "../Assets/Logo";
import Notification from "../Assets/Notification";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <Notification />
    </div>
  );
};

export default Navbar;
