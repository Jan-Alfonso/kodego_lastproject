import React from "react";
import NavAppBar from "./AppBar";
import GamesTable from "./GamesTable";
import "./Bg.css";

function Games() {
  return (
    <>
      <div>
        <div className="about-us-container"></div>
      </div>
      <div>
        <NavAppBar />
        <GamesTable />
      </div>
    </>
  );
}

export default Games;
