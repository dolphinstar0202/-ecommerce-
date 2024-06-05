import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar' >
      <div className="companylogo">
        Devstore
      </div>
      <div className="navicons">
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="wishcartsearchicon">
        <ul>
            <li>wish</li>
            <li>cart</li>
            <li>like</li>
            <li>lines</li>
        </ul>        
      </div>
      
    </div>
  )
}

export default Navbar
