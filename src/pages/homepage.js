import NewsCarousel from "./NewsCarousel.js";
import { Link } from "react-router-dom";

import React from "react";
import Visualize from "./visualization.js";

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
