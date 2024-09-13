import React from 'react'
import logo from "../assets/Vector.png"
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="expense logo" className='navbar-image'></img>
      <div className='navbar-content'>
        <div className='items'>Blogs</div>
        <div className='items'>Features</div>
        <div className='items'>Pricing</div>
        <div className='items'>Integrations</div>
        <div className='button'>Start Trail</div>
      </div>
    </div>
  )
}
