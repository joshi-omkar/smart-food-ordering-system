import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import ConfirmOrder from './Components/User/ConfirmOrder';
import WatingOderUserInfo from './Components/User/WatingOderUserInfo';
import Menu from './Components/User/Menu';
import ItemDetails from './Components/User/ItemDetails';
import QrReaderComponent from './Components/User/QrReaderComponent';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ConfirmOrder/> */}
      <QrReaderComponent/>
      {/* <WatingOderUserInfo/> */}
      {/* <Menu/> */}
      {/* <ItemDetails/> */}
    </div>
  );
}

export default App;
