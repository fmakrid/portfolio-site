import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <h2>Makridis</h2>
      <nav id="navbuttons">
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/projects" activeStyle>
            My Work
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/resume" activeStyle>
            Resume
          </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
