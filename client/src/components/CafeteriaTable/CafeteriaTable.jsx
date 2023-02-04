import React, { useState } from "react";
import "./CafeteriaTable.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { cafeData } from "../../files/cafe";
import CafeTableData from "../CafeTableData/CafeTableData";

const CafeteriaTable = () => {
  const [checked, setChecked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const updateQuantity = (e) => {
    setQuantity((quantity) => quantity + 1);
    console.log(quantity);
  };
  const deleteQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const tableHead = [
    "Select",
    "Sl no",
    "Item",
    "Price",
    "Availablity",
    "Quantity"
  ];
  
  return (
    <div className="cafeteria-table">
      <div className="table-navbar">
        <h3>Items</h3>
        <div className="table-options">
          <div className="filter">
            <FilterAltOutlinedIcon style={{ fontSize: "27px" }} />
            <p>Filter</p>
          </div>
          <form action="">
            <input type="text" placeholder="Search" />
          </form>
          <button className="upload-button">Upload</button>
        </div>
      </div>

      <table className="cafe-table">
        <thead>
          <tr>
            {tableHead.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {cafeData.map((item, index) => {
            return (
              <CafeTableData
                index={index + 1}
                item={item.item}
                price={item.price}
                availablity={item.availablity}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CafeteriaTable;
