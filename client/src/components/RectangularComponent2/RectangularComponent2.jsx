import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./RectangularComponent2.css";
import { NavLink } from "react-router-dom";

const RectangularComponent2 = (props) => {
  return (
    <div
      className="secondary-container"
      style={
        props.color
          ? { backgroundColor: `${props.color}`, width: `${props.width}` }
          : { backgroundColor: "#fff", width: `${props.width}` }
      }
    >
      <div className="head-content">
        {props.img && <img src={props.img} alt="" />}
        <h5>{props.heading}</h5>
      </div>
      <div className="container-body">
        <div className="props-content">
          <div className="props1">
            <PersonOutlineOutlinedIcon />
            <p>{props.para1}</p>
          </div>
          <div className="props2">
            <PersonOutlineOutlinedIcon />
            <p>{props.para2}</p>
          </div>
        </div>
        <NavLink to={props.link}>
          <div
            className="view-button"
            style={
              props.color == "#fff"
                ? {
                    backgroundColor: "#5800FF",
                    color: "#fff"
                  }
                : {
                    backgroundColor: "#fff"
                  }
            }
          >
            <p>view</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default RectangularComponent2;
