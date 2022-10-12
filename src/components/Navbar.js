import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <div class="navbar">
      <h2 class="brand-title">Makridis</h2>
      <nav class="navbar-links">
        <ul>
          <NavLink class="NavLink" to="/" activestyle={{ color: "gold" }}>
            Home
          </NavLink>
          <NavLink class="NavLink" to="/projects" activestyle={{ color: "gold" }}>
            My Work
          </NavLink>
          <NavLink class="NavLink" to="/about" activestyle={{ color: "gold" }}>
            About
          </NavLink>
          <NavLink class="NavLink" to="/contact" activestyle={{ color: "gold" }}>
            Contact
          </NavLink>
          <NavLink class="NavLink" to="/resume" activestyle={{ color: "gold" }}>
            Resume
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
