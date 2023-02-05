import React from "react";
import "./Transport.css";
import { GoLocation } from "react-icons/go";
import { TbCurrentLocation } from "react-icons/tb";
import { FiMap } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Transport = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
