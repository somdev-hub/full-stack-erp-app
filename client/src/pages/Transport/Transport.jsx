import React from "react";
import "./Transport.css";
import { GoLocation } from "react-icons/go";
import { TbCurrentLocation } from "react-icons/tb";
import { FiMap } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import RectangularComponent2 from "../../components/RectangularComponent2/RectangularComponent2";
import DeptNotice from "../../components/DeptNotice/DeptNotice";
// import backImage from "../../assets/transport/transport1.png";

const Transport = () => {
  const iconStyle = {
    width: "25px",
    height: "25px"
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="transport-container">
          <h3 className="your-profile">Transport</h3>
          <div className="transport-main">
            <div className="current-vehicle">
              <div className="current-vehicle-head">
                <h3>Silicon Rider - I</h3>
                <p>On drive, Ainthapali, 743646</p>
              </div>
              <div className="tracking-button">
                <button>
                  <h5>Track on map</h5>
                  <TbLocation style={{ width: "22px", height: "22px" }} />
                </button>
              </div>
            </div>
            <div className="current-information">
              <div className="location current-info-container">
                <GoLocation style={iconStyle} />
                <h5>Location : ON</h5>
              </div>
              <div className="gps current-info-container">
                <TbCurrentLocation style={iconStyle} />
                <h5>Ainthapali, Sambalpur, pin: 754248</h5>
              </div>
              <div className="map current-info-container">
                <FiMap style={iconStyle} />
                <h5>Open map</h5>
              </div>
            </div>
            <div className="transport-options">
              <div className="transport-menu">
                <div className="vehicles-and-options">
                  <h3 className="your-profile">Vehicles and Options</h3>
                  <div className="vehicles-and-options-grid">
                    <RectangularComponent2
                      color="#fff"
                      heading="Silicon Rider - I"
                      para1="On drive"
                      para2="Driver : Murli Singh"
                      width="22rem"
                    />
                    <RectangularComponent2
                      color="#fff"
                      heading="Silicon Rider - II"
                      para1="Not on drive"
                      para2="Driver : Murli Singh"
                      width="22rem"
                    />
                    <RectangularComponent2
                      color="#fff"
                      heading="Hostel car"
                      para1="Not on drive"
                      para2="Driver : Murli Singh"
                      width="22rem"
                    />
                    <RectangularComponent2
                      color="#fff"
                      heading="Ambulance"
                      para1="On drive"
                      para2="Driver : Murli Singh"
                      width="22rem"
                    />
                  </div>
                </div>
                <div className="transport-office">
                  <h3 className="your-profile">Transport Office</h3>
                  <div className="transport-office-grid">
                    <RectangularComponent2
                      color="#fff"
                      heading="Vehicle in-charge"
                      para1="On drive"
                      para2="Driver : Murli Singh"
                      width="22rem"
                    />
                    <RectangularComponent2
                      color="#fff"
                      heading="FIC - Transport"
                      para1="On drive"
                      para2="Driver : Murli Singh"
                      width="22rem"
                    />
                  </div>
                </div>
              </div>
              <div className="transport-notice">
                <DeptNotice heading="Transport Notice" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
