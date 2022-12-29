import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(true);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className="navbar">
      <div className="heading">
        <h1 className="heading-text">Welcome back, Somdev</h1>
        <p className="head-para">Here is your ERP</p>
      </div>
      <div className="navbar-right">
        <div
          className="search-and-profile"
          style={{ display: "flex", flexDirection: "row", gap: "5%" }}
        >
          <form action="">
            <input type="text" placeholder="Search" className="search"/>
          </form>

          <div className="profile" onClick={handleClick}>
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?w=360"
              alt=""
            />
          </div>
        </div>
        <div
          className="profile-expanded"
          style={
            isExpanded ? { visibility: "collapse" } : { visibility: "visible" }
          }
        >
          <div className="navbar-profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XmmVnMfky_5fsWIgguEgDW_v5D3znnJbqw&usqp=CAU"
              alt=""
            />
            <div className="details">
              <h3>John Doe</h3>
              <p>student</p>
            </div>
          </div>
          <div className="navbar-buttons">
            <a href="/profile">
              <div className="button1" style={{ border: "2px solid black" }}>
                <p style={{ color: "#000" }}>View Profile</p>
              </div>
            </a>
            <a href="">
              <div className="button2" style={{ border: "2px solid red" }}>
                <p style={{ color: "red" }}>Log Out</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
