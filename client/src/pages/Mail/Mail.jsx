import React from "react";
import "./Mail.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";

const Mail = () => {
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
                      <h3>Information Cell</h3>
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
                    <h3>Students, Staffs ...</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mail-body">
              {/* <h5>Hello Everyone</h5> */}
              <p>
                <b>Hello Everyone</b>
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
                perferendis ipsa nobis praesentium eveniet aspernatur,
                dignissimos magnam assumenda sunt in tenetur commodi, laboriosam
                obcaecati harum eum. Exercitationem quod incidunt obcaecati,
                repellat animi ea tempora consequatur aliquam velit temporibus
                eius hic rem cum corrupti voluptatum dolorem facilis, ullam
                veritatis. Excepturi, officia.
                <br />
                <br />
                <p>
                  Cc: <br />
                  All notice boards <br />
                  All HODS
                </p>
              </p>
            </div>
            <div className="attachments">
              <div className="download-circle">
                <DownloadIcon style={{ fontSize: "2rem" }} />
              </div>
              <div className="attachment">
                <CropOriginalIcon style={{ fontSize: "2rem" }} />{" "}
                <p style={{ fontSize: "22px" }}>Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
