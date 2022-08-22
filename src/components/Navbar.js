import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <h2 id="surname">Makridis</h2>
      <nav id="navbuttons">
        <NavLink to="/" activeStyle={{ color: "gold" }}>
          Home
        </NavLink>
        <NavLink to="/projects" activeStyle={{ color: "gold" }}>
          My Work
        </NavLink>
        <NavLink to="/about" activeStyle={{ color: "gold" }}>
          About
        </NavLink>
        <NavLink to="/contact" activeStyle={{ color: "gold" }}>
          Contact
        </NavLink>
        <NavLink to="/resume" activeStyle={{ color: "gold" }}>
          Resume
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
