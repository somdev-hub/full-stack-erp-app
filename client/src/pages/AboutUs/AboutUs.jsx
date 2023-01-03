import React from "react";
import "./AboutUs.css";
import Sidebar from "../../components/sidebar/Sidebar";
import image from "../../files/mainlogo.png";
import appstore from "../../files/app-store.png";
import playstore from "../../files/play-store.png";

const AboutUs = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="about-us-container">
        <div className="about-container-img">
          <img src={image} alt="" />
          <h1>The ERP solutions private limited</h1>
        </div>
        <div className="about-content">
          <p>
            This app is a product of the ERP solutions private limited. Any
            information collected and viewed on this website is collected with
            the due permission and respective submission of both the institute
            and the students. The company is responsible for any data loss
            through the app but is not responsible for any loss or infiltration
            of data if the same has been done by the user.
          </p>
          <h3>Download our android and ios apps</h3>
          <div className="download-icons">
            <img src={playstore} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
