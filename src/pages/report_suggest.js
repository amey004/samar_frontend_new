import React from "react";
import ReportBox from "../components/reportBox";
import image from '../images/slum4.jpg';

function ReportSuggest(){
    return (
        <div style={{
            // marginTop:"12vh",
            marginLeft:"auto",
            marginRight:"auto",
            position:"relative",
            }}>  
            <img src={image} alt="" style={{height:"100vh", objectFit:"cover", width:"100vw"}}></img>
            <div style={{position:"absolute", top:"1%", left:"", width:"100vw"}}><ReportBox/></div>
            
        </div>
    );
}

export default ReportSuggest;