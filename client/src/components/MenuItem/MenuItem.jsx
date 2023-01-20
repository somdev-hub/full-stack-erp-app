import React from "react";
import "./MenuItem.css";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { createContext } from "react";

const itemQuantity = createContext();
const MenuItem = (props) => {
  const [itemCount, setItemCount] = React.useState(0);
  const setCount = () => {
    setItemCount(itemCount + 1);
  };
  const unSetCount = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };
  return (
    <itemQuantity.Provider value={itemCount}>
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
            <RemoveCircleIcon
              style={{ cursor: "pointer" }}
              onClick={unSetCount}
            />
            <p>{itemCount}</p>
            <AddCircleIcon style={{ cursor: "pointer" }} onClick={setCount} />
          </div>
        </div>
      </div>
    </itemQuantity.Provider>
  );
};

export default MenuItem;
