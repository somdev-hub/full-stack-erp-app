import React from "react";
import "./Profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { info } from "../../files/info";

const Profile = () => {
  const informations=[]
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="container">
        <Navbar />

        <div className="profile-container">
          <h3 className="your-profile">Your Profile</h3>
          <div className="profile-info-main">
            <div className="profile-pic">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XmmVnMfky_5fsWIgguEgDW_v5D3znnJbqw&usqp=CAU"
                alt=""
              />
              <div className="sic-regd">
                <h2>{info.name}</h2>
                <p>SIC - {info.sic}</p>
                <p>Registration no. {info.regd}</p>
              </div>
            </div>
            <div className="main-info">
              
              <div className="data">
                <div className="tuple1">
                  <p>Mobile Number : </p>
                  <p>{info.mobile_number}</p>
                </div>
                <div className="tuple2">
                  <p>Program : </p>
                  <p>{info.program}</p>
                </div>
              </div>
              <div className="data">
                <div className="tuple1">
                  <p>Email Id : </p>
                  <p>{info.email}</p>
                </div>
                <div className="tuple2">
                  <p>Branch : </p>
                  <p>{info.branch}</p>
                </div>
              </div>
              <div className="data">
                <div className="tuple1">
                  <p>Faculty Advisor : </p>
                  <p>{info.faculty_advisor}</p>
                </div>
                <div className="tuple2">
                  <p>Semester : </p>
                  <p>{info.semester}</p>
                </div>
              </div>
              <div className="data">
                <div className="tuple1">
                  <p>F/A mobile no. : </p>
                  <p>{info.f_a_mobile_number}</p>
                </div>
                <div className="tuple2">
                  <p>Group : </p>
                  <p>{info.group}</p>
                </div>
              </div>
              <div className="data">
                <div className="tuple1">
                  <p>Home contact no. : </p>
                  <p>{info.home_contact_no}</p>
                </div>
                <div className="tuple2">
                  <p>Batch : </p>
                  <p>{info.batch}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-info-secondary">
            <div className="personal-info1">
              <div className="profile-info-heading">
                <h3 style={{ fontWeight: "600", margin: "0 0 0 5%" }}>
                  Personal
                </h3>
              </div>
            </div>
            <div className="personal-info2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
