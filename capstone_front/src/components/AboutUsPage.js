import React from "react";
import NavAppBar from "./AppBar";
import AboutUsContent from "./AboutUsContent";
import "./Bg.css";

function AboutUs() {
  return (
    <>
      <div>
        <div className="about-us-container"></div>
      </div>
      <div>
        <NavAppBar />
        <AboutUsContent />
      </div>
    </>
  );
}

export default AboutUs;
