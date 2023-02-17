import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import logo from "../../../files/mainlogo.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          <p>The ERP Solutions</p>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="#" style={{ color: "#000" }}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="#" style={{ color: "#000" }}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="#" style={{ color: "#000" }}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
