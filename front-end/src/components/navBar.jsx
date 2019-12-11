import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/programs">
            Programs
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
