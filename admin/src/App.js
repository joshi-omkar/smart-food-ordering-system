import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tables from "./components/Tables";
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/tables" exact element={<Tables/>}/>
        <Route path="/menu" exact element={<Menu/>}/>
      </Routes>
    </div>
  );
}

export default App;
