import React from "react";
import "./DeptNotice.css";

const DeptNotice = (props) => {
  return (
    <div className="dept-notice">
      <div className="dept-notice-heading">
        <h3>{props.heading}</h3>
      </div>
    </div>
  );
};

export default DeptNotice;
