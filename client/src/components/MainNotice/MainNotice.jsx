import React, { useState, useEffect } from "react";
import "./MainNotice.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import { notices } from "../../files/notices";
import shortid from "shortid";
import axios from "axios";

const MainNotice = () => {
  const [notices, setNotices] = useState([]);
  const fetchNotices = async () => {
    try {
      await axios.get("http://localhost:5000/api/getMainNotice").then((res) => {
        setNotices(res.data);
      });
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const viewNotice = (e) => {
    console.log(e.target.value);
  }
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const oddMonths = [1, 3, 5, 8, 10];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let i = -1;
  let j = 0;
  let overflow = false;
  const date = new Date();
  if (!notices.length) return <div className="main-notice">Loading...</div>;
  return (
    <div className="main-notice">
      <div className="head">
        <h3>{`${months[date.getMonth()]} ${date.getFullYear()}`}</h3>
        <div className="week">
          {days.map((day) => {
            i++;
            if (
              date.getDate() + i > 30 &&
              oddMonths.includes(date.getMonth())
            ) {
              j++;
              overflow = true;
            } else if (
              date.getDate() + i > 31 &&
              !oddMonths.includes(date.getMonth())
            ) {
              j++;
              overflow = true;
            }
            return (
              <div className="day" key={shortid.generate()}>
                <p>{day}</p>
                <h4>{!overflow ? `${date.getDate() + i}` : `${j}`}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="main-hr" />
      <h3 className="title-notice">Notices</h3>
      <div className="all-notice">
        {notices.map((notice) => {
          return (
            <div className="notice-container" key={notice._id} onClick={()=>{console.log(notice._id);}}>
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
                      <p>{`${notice.description.substring(0, 40)}...`}</p>
                    </div>
                    <ArrowForwardIosOutlinedIcon />
                  </div>
                  <div className="notice-attachment">
                    <a href={notice.attachment} target="_blank">
                      <p>{notice.attachment_type}</p>
                    </a>
                  </div>
                </div>
              </div>

              <hr className="notice-hr" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainNotice;
