import React from "react";
import NavAppBar from "./AppBar";
import gamesbg from "../assets/gamesbg.jpg";
import RecipeReviewCard from "./NewsContent";

function WhatsNew() {
  return (
    <>
      <div>
        <div className="about-us-container"></div>
      </div>
      <div>
        <NavAppBar />
        <RecipeReviewCard />
      </div>
    </>
  );
}

export default WhatsNew;
