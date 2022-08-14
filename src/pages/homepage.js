import building from "../images/slum_bg_blue.png";
import logo from "../images/samar_logo.png";
import { Button,Grid,Ite } from "@material-ui/core";
import NewsCarousel from "./NewsCarousel.js";
import { Link } from "react-router-dom";

import React from "react";

function LandingPage() {
  return (
    <>
      <div className="home">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="samar">
              <img src={logo} alt="" className="logo"></img>
              <p >Slum Administration, Management and Rehabilitation</p>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                style={{marginLeft:"6.5vw"}}
              >
                Get Started
              </Button>
            </div>
          </Grid>
          <Grid item xs={6} style={{textAlign:"center"}}>
            <NewsCarousel />
          </Grid>
        </Grid>
        {/* <img src={building} alt=""  className="slumbg" /> */}
      </div>
    </>
  );
}

export default LandingPage;
