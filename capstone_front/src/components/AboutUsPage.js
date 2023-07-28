import React from "react";
import NavAppBar from "./AppBar";
import gamesbg from "../assets/gamesbg.jpg";

function AboutUs() {
  return (
    <div>
      <div className="main">
        <div className="overlay">
          <NavAppBar />
        </div>
        <div className="gamesbg">
          <img src={gamesbg} alt="pagesbg" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
