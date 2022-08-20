import React from "react";
import { Grid } from '@material-ui/core';
import ReportBox from "../components/reportBox";
import image from '../images/slum1.jpg'
function ReportSuggest(){
    return (
        <div style={{
            // marginTop:"12vh",
            marginLeft:"auto",
            marginRight:"auto",
            position:"relative",
            }}>   
      <img src={image} alt="" className="carousel-img" style={{height:"100vh"}}></img>
            <ReportBox/>
        </div>
    );
}

export default ReportSuggest;