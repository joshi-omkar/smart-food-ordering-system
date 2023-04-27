import React from 'react'
import '../Styles/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="left-container">
        <div className="logo">{/* <img src="" alt="logo" /> */}</div>
        <div className="navlink-contanier">
          <Link to='/'><span className="navlink">Home</span></Link>
          <Link to='/tables'><span className="navlink">Tables</span></Link>
          <Link to='/menu'><span className="navlink">Menu</span></Link>
          <Link to='/'><span className="navlink">Order History</span></Link>
        </div>
      </div>
      <div className="icon-container">
        <span className="icon"></span>
        <span className="icon"></span>
        <span className="icon"></span>
      </div>
    </section>
  )
}

export default Navbar