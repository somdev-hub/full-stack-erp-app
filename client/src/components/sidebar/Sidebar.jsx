import React, { useState } from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import logo from "../../files/mainlogo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="sidebar">
      <NavLink to="/about-us">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </NavLink>
      <div className="icons">
        <NavLink to="/">
          <div className="covered">
            <HomeOutlinedIcon
              style={{
                fontSize: "30px",
                color: isClicked ? "fff" : "fff",
                margin: "7% 0 0 10%"
              }}
            />
          </div>
        </NavLink>
        <div className="">
          <CalendarMonthOutlinedIcon style={{ fontSize: "30px" }} />
        </div>
        <div className="">
          <ShoppingBagOutlinedIcon style={{ fontSize: "30px" }} />
        </div>
        <div className="">
          <SendOutlinedIcon style={{ fontSize: "30px" }} />
        </div>
      </div>
      <div className="bottom-icons">
        <SettingsOutlinedIcon style={{ fontSize: "30px" }} />
        <LogoutOutlinedIcon style={{ fontSize: "30px" }} />
      </div>
    </div>
  );
};

export default Sidebar;
