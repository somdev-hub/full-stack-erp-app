import React, { useState } from "react";
import "./Subjects.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import info from "../../files/info";
import RectangularComponent2 from "../../components/RectangularComponent2/RectangularComponent2";
import axios from "axios";
import { useEffect } from "react";

const Subjects = () => {
  const [info, setInfoData] = useState({});
  const fetchInfo = async () => {
    const email = localStorage.getItem("email");
    const url = `http://localhost:5000/api/getUserData/${email}`;
    await axios.get(url).then((res) => {
      setInfoData(info => ({
        ...info,
        ...res.data
      }));
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="subject-container">
          <h3 className="your-profile">Your Subjects</h3>
          <div className="basic-details">
            <ul>
              <li>{info.full_name}</li>
              <li>SIC - {info.sic}</li>
              <li>Registration No. - {info.regd}</li>
              <li>Branch- {info.branch_short}</li>
              <li>Semester - {info.semester}</li>
            </ul>
          </div>
          <div className="subjects-and-notices">
            <div className="subjects">
              <RectangularComponent2
                img="https://sjcit.ac.in/wp-content/uploads/2022/03/mathematics-png.jpg"
                color="#439A9780"
                heading="Mathematics - III"
                para1="Upcoming Exams"
                para2="Modules"
                width="25rem"
              />
              <RectangularComponent2
                img="https://sjcit.ac.in/wp-content/uploads/2022/03/mathematics-png.jpg"
                color="#F8F98880"
                heading="OPPS"
                para1="Upcoming Exams"
                para2="Modules"
                width="25rem"
              />
              <RectangularComponent2
                img="https://sjcit.ac.in/wp-content/uploads/2022/03/mathematics-png.jpg"
                color="#00FFF680"
                heading="Data Structures"
                para1="Upcoming Exams"
                para2="Modules"
                width="25rem"
              />
              <RectangularComponent2
                img="https://sjcit.ac.in/wp-content/uploads/2022/03/mathematics-png.jpg"
                color="#FFA1CF80"
                heading="Digital Logic Design"
                para1="Upcoming Exams"
                para2="Modules"
                width="25rem"
              />
              <RectangularComponent2
                img="https://sjcit.ac.in/wp-content/uploads/2022/03/mathematics-png.jpg"
                color="#FF955180"
                heading="Organisational Behaviour"
                para1="Upcoming Exams"
                para2="Modules"
                width="25rem"
              />
              <RectangularComponent2
                img="https://sjcit.ac.in/wp-content/uploads/2022/03/mathematics-png.jpg"
                color="#00FFAB80"
                heading="Environmental Sciences"
                para1="Upcoming Exams"
                para2="Modules"
                width="25rem"
              />
            </div>
            <div className="subject-notice">
              <div className="subject-notice-heading">
                <h3>Important Notices</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
