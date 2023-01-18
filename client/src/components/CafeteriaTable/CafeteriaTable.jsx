import React from "react";
import "./CafeteriaTable.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { cafeData } from "../../files/cafe";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";

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
              <tr className="cafe-data" key={index}>
                <div className="row-content">
                  <td>
                    {/* <div
                      className="select"
                      onClick={() => {
                        setChecked(!checked);
                      }}
                    >
                      {checked ? <CheckBoxIcon /> : null}
                    </div> */}
                    <label htmlFor="" className="checkbox">
                      <input type="checkbox" className="select" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td>{index + 1}</td>
                  <td>{item.item}</td>
                  <td>{`Rs. ${item.price}/-`}</td>
                  <td>{item.availablity}</td>
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
                </div>
                <hr
                  style={{
                    width: "100%"
                  }}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CafeteriaTable;
