import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="brand-title">Makridis</h2>
      <a href="#" className="toggle-button">
        <span class>
          
        </span>
      </a>
      <nav className="navbar-links">
        <ul>
          <NavLink className="NavLink" to="/" activestyle={{ color: "gold" }}>
            Home
          </NavLink>
          <NavLink className="NavLink" to="/projects" activestyle={{ color: "gold" }}>
            My Work
          </NavLink>
          <NavLink className="NavLink" to="/about" activestyle={{ color: "gold" }}>
            About
          </NavLink>
          <NavLink className="NavLink" to="/contact" activestyle={{ color: "gold" }}>
            Contact
          </NavLink>
          <NavLink className="NavLink" to="/resume" activestyle={{ color: "gold" }}>
            Resume
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
