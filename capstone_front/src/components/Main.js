import React from "react";
import videoBG from "../assets/videoBG.mp4";
import NavAppBar from "./AppBar";
import PaperCG from "./Paper";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login_token");
    navigate("/login");
  };
  return (
    <>
      <div className="main">
        <div className="overlay">
          <NavAppBar className="navbar" />
          <div className="homeTitle">
            <div className="titlebox">
              <div className="title">"CONQUER THE CHAOS OF GAMING"</div>
            </div>
            <div className="scndryTitlebox">
              <div className="scndryTitle">-A Game Sorter</div>
            </div>
            <div className="flexblueyellow">
              <div className="bluebox"></div>
              <div className="yellowbox"></div>
            </div>
            <PaperCG />
          </div>
        </div>
        <div className="videoHome">
          <video src={videoBG} autoPlay loop muted />
        </div>
      </div>
    </>
  );
}

export default Home;
