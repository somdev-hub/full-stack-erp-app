import React from "react";

const ProgressBar = (props) => {
  const fullBar = {
    height: "20px",
    width: "90%",
    backgroundColor: `${props.backColor}`,
    borderRadius: "10px"
  };

  const progressBar = {
    height: "100%",
    width: `${props.progress}%`,
    backgroundColor: `${props.color}`,
    textAlign: "right",
    borderRadius: "inherit"
  };
  return (
    <div>
      <div className="" style={fullBar}>
        <div className="" style={progressBar}>
          <span
            style={
              props.color === "#5800ff" ? { color: "#fff" } : { color: "#000" }
            }
          >{`${props.progress}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
