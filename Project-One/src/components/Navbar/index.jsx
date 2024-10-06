import React from 'react'
import './style.css'

const NavbarComponent = () => {
  return (
    <nav className='container'>
      <div className="logo">
        <img src="../public/images/brand_logo.png" alt="brand logo" />
      </div>
      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className='filled'>Login</button>
    </nav>
  )
}

export default NavbarComponent
