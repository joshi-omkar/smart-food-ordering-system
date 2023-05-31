import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tables from "./components/Tables";
import Menu from './components/Menu'
import GenerateBill from './components/GenerateBill'
import Home from './components/Home'
import { OrderHistory } from "./components/OrderHistory";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/tables" exact element={<Tables/>}/>
        <Route path="/menu" exact element={<Menu/>}/>
        <Route path="/generateBill/:tableId"  exact element={<GenerateBill />} />
        <Route path="/orderHistory" exact element={<OrderHistory/>} />
      </Routes>
    </div>
  );
}

export default App;
