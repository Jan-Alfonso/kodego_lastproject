import React from "react";
import NavAppBar from "./AppBar";
import gamesbg from "../assets/gamesbg.jpg";
import EnhancedTable from "./GamesTable";

function Games() {
  return (
    <div>
      <div className="main">
        <div className="overlay">
          <NavAppBar />
          <EnhancedTable />
        </div>
        <div className="gamesbg">
          <img src={gamesbg} alt="pagesbg" />
        </div>
      </div>
    </div>
  );
}

export default Games;
