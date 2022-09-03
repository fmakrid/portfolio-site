import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <h2 id="surname">Makridis</h2>
      <nav id="navbuttons">
        <NavLink to="/" activestyle={{ color: "gold" }}>
          Home
        </NavLink>
        <NavLink to="/projects" activestyle={{ color: "gold" }}>
          My Work
        </NavLink>
        <NavLink to="/about" activestyle={{ color: "gold" }}>
          About
        </NavLink>
        <NavLink to="/contact" activestyle={{ color: "gold" }}>
          Contact
        </NavLink>
        <NavLink to="/resume" activestyle={{ color: "gold" }}>
          Resume
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
