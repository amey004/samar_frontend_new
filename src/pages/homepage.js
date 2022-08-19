import NewsCarousel from "./NewsCarousel.js";

import React from "react";
import Visualize from "./visualization.js";
import Map from "./maps.js";


function LandingPage() {
  return (
    <>
      <div className="home">
      <NewsCarousel />
      <Visualize/>
      <Map/>
      </div>
    </>
  );
}

export default LandingPage;
