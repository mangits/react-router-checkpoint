import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="Navbar">
        <li><h2>Profiles Inc.</h2></li>
        <li><NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Home</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={{fontWeight: "bold", color:"white", textDecoration: "none"}}>About</NavLink></li>
        <li><NavLink exact to="/profiles" activeStyle={{fontWeight: "bold", color:"white", textDecoration: "none"}}>Profiles</NavLink></li>
    </ul>
  )
}

export default Nav;