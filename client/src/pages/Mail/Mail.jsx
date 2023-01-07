import React, { useEffect, useState } from "react";
import "./Mail.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import { useParams } from "react-router-dom";
import axios from "axios";
import reactStringReplace from "react-string-replace";
// import { MainNotice } from "../../components/MainNotice/MainNotice";

const Mail = () => {
  const { id } = useParams();
  console.log(id);
  const [primaryNotice, setPrimaryNotice] = useState({});
  const fetchPrimaryNotice = async () => {
    try {
      await axios
        .get(`http://localhost:5000/api/getNotice/${id}`)
        .then((res) => {
          setPrimaryNotice((primaryNotice) => ({
            ...primaryNotice,
            ...res.data
          }));
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPrimaryNotice();
  }, []);
  // console.log(primaryNotice.heading);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="mail-container">
          <div className="mail-content">
            <div className="mail-head">
              <div className="from-to">
                <div className="from">
                  <div className="from-content">
                    <h4>From</h4>
                    <div className="clickable-container">
                      <h3>{primaryNotice.from}</h3>
                    </div>
                  </div>
                  <div className="mail-buttons">
                    <div className="mail-button">
                      <ShareIcon style={{ color: "#fff" }} />
                    </div>
                    <div className="mail-button">
                      <BookmarkBorderIcon style={{ color: "#fff" }} />
                    </div>
                    <div className="mail-button">
                      <MenuIcon style={{ color: "#fff" }} />
                    </div>
                  </div>
                </div>
                <div className="to">
                  <h4>To</h4>
                  <div className="clickable-container">
                    <h3>{primaryNotice.to}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mail-body">
              <p>
                {reactStringReplace(
                  primaryNotice.description,
                  "\n",
                  (match, i) => {
                    <span>{match}</span>;
                  }
                )}
              </p>
            </div>
            <div className="attachments">
              <div className="download-circle">
                <DownloadIcon style={{ fontSize: "2rem" }} />
              </div>
              <a href={primaryNotice.attachment} target="_blank">
                <div className="attachment" style={{ color: "#000" }}>
                  <CropOriginalIcon style={{ fontSize: "2rem" }} />{" "}
                  <p style={{ fontSize: "22px" }}>Image</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
