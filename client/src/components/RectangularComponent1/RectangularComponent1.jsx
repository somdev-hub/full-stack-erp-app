import React, { useState } from "react";
import "./RectangularComponent1.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RectangularComponent1 = (props) => {
  const [isMousedOver, setIsMousedOver] = useState(false);
  const style = {
    marginRight: isMousedOver ? "5%" : "10%",
    transition: "all 0.5s ease-in-out"
  };
  return (
    <div
      className="main-container"
      style={{ backgroundColor: `${props.color}` }}
    >
      <div
        className="content"
        style={props.color === "#fff" ? { color: "#000" } : { color: "#fff" }}
        onMouseOver={() => {
          setIsMousedOver(!isMousedOver);
        }}
        onMouseOut={() => {
          setIsMousedOver(!isMousedOver);
        }}
      >
        <div className="content-text">
          <h3 className="content-head">{props.title}</h3>
          <p className="content-para">{props.para}</p>
        </div>
        <ArrowForwardIcon style={style} />
      </div>
      <div className="progress">
        <ProgressBar
          progress={props.progress}
          color={props.progressColor}
          backColor={props.progressBackColor}
          width="90%"
        />
      </div>
    </div>
  );
};

export default RectangularComponent1;
