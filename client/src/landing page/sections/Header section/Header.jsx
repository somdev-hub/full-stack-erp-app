import React from "react";
import "./Header.css";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import phone from "../../../files/Group 268.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="bubble1"></div>
      <div className="bubble2"></div>
      <div className="bubble3"></div>
      <div className="bubble4"></div>
      <div className="rec1">With advance security features</div>
      <div className="rec2">Realibility and 24x7 system support </div>
      <div className="rec3">Great UI with beautiful looking asthetics</div>
      <div className="rec4">
        Features enriching every aspect of an institute
      </div>
      <div className="social-icons">
        <ul>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsLinkedin />
          </li>
          <li>
            <BsInstagram />
          </li>
        </ul>
      </div>
      <div className="header-head">
        <div className="header-text">
          <h1>The Future of ERP</h1>
          <p>
            Building the advance yet simple solution for corporate and institute
            management with future scalability and resiliency. Use now and get
            the benifits
          </p>
        </div>
        <div className="header-form">
          <form action="">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email to subscribe"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="header-illustrations">
        <div className="phone-illustration">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
