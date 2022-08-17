import NewsCarousel from "./NewsCarousel.js";

import React from "react";
import Visualize from "./visualization.js";
// import Map from "./kepler/maps";


function LandingPage() {
  return (
    <>
      <div className="home">
      <NewsCarousel />
      <Visualize/>
      </div>
    </>
  );
}

export default LandingPage;
