import React from "react";
import "./Attendance.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import attendance from "../../files/attendance.json";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Attendance = () => {
  const tableHead = [
    "Sl no",
    "Subject",
    "Branch/Section",
    "Roll no",
    "Faculty",
    "Attendance"
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="attendance-container">
          <h3 className="your-profile">Your Attendance</h3>
          <div className="attandance-table">
            <table className="roll-table">
              <thead>
                <tr>
                  {tableHead.map((item, index) => {
                    return <th key={index}>{item}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {attendance.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.subject}</td>
                      <td>{item.branch}</td>
                      <td>{item.rollno}</td>
                      <td>{item.faculty}</td>
                      <td style={{ display: "flex", justifyContent: "center" }}>
                        <ProgressBar
                          progress={item.attendance}
                          backColor="#D9D9D9"
                          color="#5800ff"
                          width="12rem"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
