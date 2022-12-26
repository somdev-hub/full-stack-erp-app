import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <h1 className="heading-text">Welcome back, Somdev</h1>
        <p className="head-para">Here is your ERP</p>
      </div>
      <div
        className="search-and-profile"
        style={{ display: "flex", flexDirection: "row", gap: "5%" }}
      >
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
        <a href="/profile">
          <div className="profile">
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?w=360"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
