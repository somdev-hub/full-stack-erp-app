import React from "react";
import "./Intro.css";
import contentImg from "../../../files/Women Web Developer with laptop.svg";

const Intro = () => {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Redefine yourself with the technology</h1>
      <div className="intro-content">
        <div className="content-left">
          <div className="rec5">Connection</div>
          <div className="rec6">Technology</div>
          <div className="rec7">Experience</div>
          <div className="bubble5"></div>
          <div className="bubble6"></div>
          <img src={contentImg} alt="" />
        </div>
        <div className="content-right">
          <p className="intro-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            nostrum voluptatum eum, quas consectetur quibusdam non? Ipsa
            veritatis similique voluptatem quis nisi nihil! Vero nisi corporis
            incidunt voluptatem rem dolorem laborum, distinctio illo dicta
            molestiae nobis modi neque id quos beatae blanditiis magni quo!
            Necessitatibus amet deleniti enim praesentium dolorem? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eos doloremque culpa id
            ducimus autem, dicta harum itaque. Earum asperiores, eum minima enim
            quod quo unde omnis, similique optio eos repellat!
          </p>
          <div className="intro-buttons">
            <button className="connect">Connect to us</button>
            <button className="follow-us">Follow Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
