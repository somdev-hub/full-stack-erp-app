import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";
import RectangularComponent1 from "../../components/RectangularComponent1/RectangularComponent1";
import RectangularComponent2 from "../../components/RectangularComponent2/RectangularComponent2";
import { MainNotice } from "../../components/MainNotice/MainNotice";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const expandList = {
    academics: true,
    library: false,
    canteen: false,
    hostel: false,
    fees: false
  };
  const [isExpand, setExpand] = useState(expandList);

  const expand = (e) => {
    const name = e.target.innerText.toLowerCase();
    const temp = { ...isExpand };
    for (let key in temp) {
      if (key === name) {
        temp[key] = true;
      } else {
        temp[key] = false;
      }
    }
    setExpand(temp);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="dashboard-content">
          <div className="actual-container">
            <h3 className="your-dashboard">Your Dashboard</h3>
            <div
              className="progress-meters"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%"
              }}
            >
              <NavLink to="/attendance" style={{ textDecoration: "none" }}>
                <RectangularComponent1
                  title="Attendance"
                  para="See your attendance report"
                  color="#5800ff"
                  progress="75"
                  progressColor="#72FFFF"
                  progressBackColor="#fff"
                />
              </NavLink>
              <NavLink to="/fees">
                <RectangularComponent1
                  title="Fees"
                  para="See your remaining dues"
                  color="#fff"
                  progress="75"
                  progressColor="#5800ff"
                  progressBackColor="#E8F0F2"
                />
              </NavLink>
            </div>
            <div className="lists">
              <ul>
                <li
                  style={isExpand.academics ? { fontWeight: "bold" } : null}
                  onClick={expand}
                >
                  Academics
                </li>
                <li
                  style={isExpand.library ? { fontWeight: "bold" } : null}
                  onClick={expand}
                >
                  Library
                </li>
                <li
                  style={isExpand.canteen ? { fontWeight: "bold" } : null}
                  onClick={expand}
                >
                  Canteen
                </li>
                <li
                  style={isExpand.hostel ? { fontWeight: "bold" } : null}
                  onClick={expand}
                >
                  Hostel
                </li>
                <li
                  style={isExpand.fees ? { fontWeight: "bold" } : null}
                  onClick={expand}
                >
                  Fees
                </li>
              </ul>
            </div>
            <div className="view-box">
              <div className="topics" style={{ transition: "visibility 1s" }}>
                <div
                  className={`grid-items ${
                    isExpand.academics ? "grid-items-show" : "grid-items-hide"
                  }`}
                >
                  <RectangularComponent2
                    color="#0096FF4D"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Faculty Advisor"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Examinations"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Subjects"
                    para1="Feedback"
                    para2="Suggestions"
                    link="/subjects"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Academic Calander"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                </div>
                <div
                  className={`grid-items ${
                    isExpand.library ? "grid-items-show" : "grid-items-hide"
                  }`}
                >
                  <RectangularComponent2
                    color="#0096FF4D"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Book bank"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Book issue"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Library FIC"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Academic Calander"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                </div>
                <div
                  className={`grid-items ${
                    isExpand.canteen ? "grid-items-show" : "grid-items-hide"
                  }`}
                >
                  <RectangularComponent2
                    color="#0096FF4D"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Mess and Dining"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Cafeteria"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                    link="/cafeteria"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Mess Menu"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="View All"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                </div>
                <div
                  className={`grid-items ${
                    isExpand.hostel ? "grid-items-show" : "grid-items-hide"
                  }`}
                >
                  <RectangularComponent2
                    color="#0096FF4D"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Book bank"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Book issue"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Library FIC"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Academic Calander"
                    para1="Feedback"
                    para2="Suggestions"
                    width="22rem"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="notice-section">
            <MainNotice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
