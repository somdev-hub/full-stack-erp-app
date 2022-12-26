import React from "react";
import "./RectangularComponent1.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const RectangularComponent1 = (props) => {
  return (
    <div
      className="main-container"
      style={{ backgroundColor: `${props.color}` }}
    >
      <div
        className="content"
        style={props.color === "#fff" ? { color: "#000" } : { color: "#fff" }}
      >
        <h3 className="content-head">{props.title}</h3>
        <p className="content-para">{props.para}</p>
      </div>
      <div className="progress">
        <ProgressBar progress={props.progress} color={props.progressColor} backColor={props.progressBackColor}/>
      </div>
    </div>
  );
};

export default RectangularComponent1;
