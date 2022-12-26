import React from "react";
import "./MainNotice.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { notices } from "../../files/notices";

const MainNotice = () => {
  return (
    <div className="main-notice">
      <div className="head">
        <h3>December 2022</h3>
        <div className="week">
          <div className="day">
            <p>Mon</p>
            <h4>12</h4>
          </div>
          <div className="day">
            <p>Tue</p>
            <h4>13</h4>
          </div>
          <div className="day">
            <p>Wed</p>
            <h4>14</h4>
          </div>
          <div className="day">
            <p>Thu</p>
            <h4>15</h4>
          </div>
          <div className="day">
            <p>Fri</p>
            <h4>16</h4>
          </div>
          <div className="day">
            <p>Sat</p>
            <h4>17</h4>
          </div>
          <div className="day">
            <p>Sun</p>
            <h4>18</h4>
          </div>
        </div>
      </div>
      <hr className="main-hr" />
      <h3 className="title-notice">Notices</h3>

      {notices.map((notice) => {
        return (
          <div className="notice-container" key={notice._id}>
            <div className="notice">
              <div className="notice-date">
                <p>{notice.noticeDate.date}</p>
                <p>{notice.noticeDate.month}</p>
              </div>
              <div className="notice-head">
                <div className="head-item">
                  <div className="notice-text">
                    <h4 style={{ fontSize: "18px", marginBottom: "2%" }}>
                      {notice.heading}
                    </h4>
                    <p>{notice.description}</p>
                  </div>
                  <ArrowForwardIosOutlinedIcon />
                </div>
                <div className="notice-attachment">
                  <a href={notice.attachment.content} target="_blank">
                    <p>{notice.attachment.type}</p>
                  </a>
                </div>
              </div>
            </div>

            <hr className="notice-hr" />
          </div>
        );
      })}
    </div>
  );
};

export default MainNotice;
