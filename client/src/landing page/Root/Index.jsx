import React from "react";
import "./Index.css";
import Nav from "../sections/Nav section/Nav";
import Header from "../sections/Header section/Header";
import Intro from "../sections/Intro section/Intro";
import Ad from "../Ad section/Ad";
import Features from "../Features section/Features";

const Index = () => {
  return (
    <div className="home-container">
      <Nav />
      <Header />
      <Intro/>
      <Ad/>
      <Features/>
    </div>
  );
};

export default Index;
