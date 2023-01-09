import React from "react";
import "./CafeteriaTable.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { cafeData } from "../../files/cafe";

const CafeteriaTable = () => {
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
              <>
              <tr className="cafe-data" key={index}>
                <td>
                  <div className="select"></div>
                </td>
                <td>{index + 1}</td>
                <td>{item.item}</td>
                <td>{item.price}</td>
                <td>{item.availablity}</td>
                <td>
                  <div className="add-control">
                    <RemoveCircleIcon style={{ cursor: "pointer" }} />
                    <p>0</p>
                    <AddCircleIcon style={{ cursor: "pointer" }} />
                  </div>
                </td>
              </tr>
              </>
            );
          })}
          {/* <tr className="cafe-data">
            <td>
              <div className="select"></div>
            </td>
            <td>1</td>
            <td>Chips</td>
            <td>Rs. 10/-</td>
            <td>Available</td>
            <td>
              <div className="add-control">
                <RemoveCircleIcon style={{ cursor: "pointer" }} />
                <p>0</p>
                <AddCircleIcon style={{ cursor: "pointer" }} />
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default CafeteriaTable;
