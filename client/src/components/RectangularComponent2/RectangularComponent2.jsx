import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./RectangularComponent2.css";

const RectangularComponent2 = (props) => {
  const [isMousedOver, setIsMousedOver] = useState(false);
  const mousedOver = () => {
    setIsMousedOver(true);
  };
  return (
    <div className="secondary-container">
      <div className="head-content">
        <img src={props.img} alt="" />
        <h5>{props.heading}</h5>
      </div>
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
    </div>
  );
};

export default RectangularComponent2;
