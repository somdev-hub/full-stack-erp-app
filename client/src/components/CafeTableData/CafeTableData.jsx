import React, { useState } from "react";
import "./CafeTableData.css";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CafeTableData = (props) => {
  const [quantity, setQuantity] = useState(0);
  const updateQuantity = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };
  const deleteQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <tr className="cafe-data">
      <td>
        <label htmlFor="" className="checkbox">
          <input type="checkbox" className="select" />
          <span className="checkmark"></span>
        </label>
      </td>
      <td>{props.index}</td>
      <td>{props.item}</td>
      <td>{`Rs. ${props.price}/-`}</td>
      <td>{props.availablity}</td>
      <td>
        <div className="add-control">
          <RemoveCircleIcon
            style={{ cursor: "pointer" }}
            onClick={deleteQuantity}
          />
          <p>{quantity}</p>
          <AddCircleIcon
            style={{ cursor: "pointer" }}
            onClick={updateQuantity}
          />
        </div>
      </td>
    </tr>
  );
};

export default CafeTableData;
