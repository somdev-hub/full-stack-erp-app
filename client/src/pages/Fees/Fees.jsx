import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./Fees.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { feesColumn as columnsHead } from "../../files/feesColumn";
import fees from "../../files/fees.json";

const Fees = () => {
  const columns = useMemo(() => columnsHead, []);
  const data = useMemo(() => fees, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="fees-container">
          <h3 className="your-profile">Your Dues</h3>
          <div className="fees-table">
            <table {...getTableProps()} className="dues-table">
              <thead className="dues-table-head">
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
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
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
          <div className="payment">
            <h3 className="payment-title">Make seamless online payments</h3>
            <button>Pay online</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
