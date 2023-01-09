import React from "react";
import "./MenuItem.css";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <img src={props.image} alt="" />
      <div className="menu-content">
        <h5>
          {props.item.length > 12
            ? `${props.item.substring(0, 12)}...`
            : props.item}
        </h5>
        <p>{`Rs. ${props.price}/-`}</p>
        <hr />
      </div>
      <div className="add-item">
        <p>Add</p>
        <div className="add-buttons">
          <RemoveCircleIcon style={{cursor: "pointer"}}/>
          <p>0</p>
          <AddCircleIcon style={{cursor: "pointer"}}/>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
