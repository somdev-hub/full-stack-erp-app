import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./Attendance.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { columns as columnsHead } from "../../files/columns";
import attendance from "../../files/attendance.json";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Attendance = () => {
  const columns = useMemo(() => columnsHead, []);
  const data = useMemo(() => attendance, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="attendance-container">
          <h3 className="your-profile">Your Attendance</h3>
          <div className="attandance-table">
            <table {...getTableProps()} className="attandence-table">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="attendance-tbody">
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="attendance-tr">
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
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
