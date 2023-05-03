import "./App.css";
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ConfirmOrder from "./Components/User/ConfirmOrder";
import WatingOderUserInfo from "./Components/User/WatingOderUserInfo";
import Menu from "./Components/User/Menu";
import ItemDetails from "./Components/User/ItemDetails";
import QrReaderComponent from "./Components/User/QrReaderComponent";
import { Cooking } from "./Components/User/CookingOnProcess";
import { OrderServed } from "./Components/User/OrderServed";
function App() {

 const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<QrReaderComponent />} />
        <Route path="/menu/:tableId" exact element={<Menu cart={cart} setCart={setCart}/>} />
        <Route path="/confirmOrder/:tableId" exact element={<ConfirmOrder cart={cart} setCart={setCart}/>} />
        <Route
          path="/watingOderUserInfo/:tableId"
          exact
          element={<WatingOderUserInfo />}
        />
        <Route path="/itemDetails" exact element={<ItemDetails />} />
        <Route path="/cookingOnProcess/:tableId" exact element={<Cooking />} />
        <Route path="/orderServed/:tableId" exact element={<OrderServed />} />

      </Routes>
    </div>
  );
}

export default App;
