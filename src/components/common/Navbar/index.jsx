import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <div className="logo">Travel-X</div>
    <ul>
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link className="link" to="/hill">Hill Stations</Link>
      </li>
      <li>
        <Link className="link" to="/offer">Best offer's</Link>
      </li>
      <li>
        <Link className="link" to="/sites">Our Sites</Link>
      </li>
      <li>
        <Link className="link" to="/contact">Contact</Link>
      </li>
    </ul>
    <div className="register"><a href="#">Register</a></div>
  </nav>
  )
}

export default Navbar

    // <nav>
        // <div class="logo">Travel-X</div>
    //     <div class="menu">
    //         <a href="">Home</a>
    //         <a href="">Hill Stations</a>
    //         <a href="">Best offer's</a>
    //         <a href="">Our Sites</a>
    //         <a href="">Contact</a>
    //     </div>
    //     <div class="register"><a href="#">Register</a></div>
    // </nav>