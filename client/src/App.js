import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ConfirmOrder from "./Components/User/ConfirmOrder";
import WatingOderUserInfo from "./Components/User/WatingOderUserInfo";
import Menu from "./Components/User/Menu";
import ItemDetails from "./Components/User/ItemDetails";
import QrReaderComponent from "./Components/User/QrReaderComponent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<QrReaderComponent />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/confirmOrder" exact element={<ConfirmOrder />} />
        <Route
          path="/watingOderUserInfo"
          exact
          element={<WatingOderUserInfo />}
        />
        <Route path="/itemDetails" exact element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
