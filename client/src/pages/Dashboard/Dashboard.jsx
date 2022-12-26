import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";
import RectangularComponent1 from "../../components/RectangularComponent1/RectangularComponent1";
import RectangularComponent2 from "../../components/RectangularComponent2/RectangularComponent2";
import MainNotice from "../../components/MainNotice/MainNotice";

const Dashboard = () => {
  const [isTranslate, setTranslate] = useState(false);

  const clicked = () => {
    setTranslate(!isTranslate);
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
              <RectangularComponent1
                title="Attendance"
                para="See your attendance report"
                color="#5800ff"
                progress="75"
                progressColor="#72FFFF"
                progressBackColor="#fff"
              />
              <RectangularComponent1
                title="Fees"
                para="See your remaining dues"
                color="#fff"
                progress="75"
                progressColor="#5800ff"
                progressBackColor="#E8F0F2"
              />
            </div>
            <div className="lists">
              <ul>
                <li style={{ fontWeight: "bold" }}>Academics</li>
                <li onClick={clicked} style={{ cursor: "pointer" }}>
                  Library
                </li>
                <li>Canteen</li>
                <li>Hostel</li>
                <li>Fees</li>
              </ul>
            </div>
            <div className="view-box">
              <div
                className="topics"
                style={
                  isTranslate ? { transform: "translateX(-49.5rem)" } : null
                }
              >
                <div className="grid-items">
                  <RectangularComponent2
                    color="#0096FF4D"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Faculty Advisor"
                    para1="Feedback"
                    para2="Suggestions"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Examinations"
                    para1="Feedback"
                    para2="Suggestions"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Subjects"
                    para1="Feedback"
                    para2="Suggestions"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Academic Calander"
                    para1="Feedback"
                    para2="Suggestions"
                  />
                </div>
                <div className="grid-items">
                  <RectangularComponent2
                    color="#0096FF4D"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Book bank"
                    para1="Feedback"
                    para2="Suggestions"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Book issue"
                    para1="Feedback"
                    para2="Suggestions"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Library FIC"
                    para1="Feedback"
                    para2="Suggestions"
                  />
                  <RectangularComponent2
                    color="#fff"
                    img="https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000"
                    heading="Academic Calander"
                    para1="Feedback"
                    para2="Suggestions"
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
