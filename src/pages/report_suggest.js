import React from "react";
import ReportBox from "../components/reportBox";
import image from '../images/slum4.jpg';
import {Grid} from '@material-ui/core';
import "./App.css"

function ReportSuggest(){
    return (
                <Grid container justifyContent="space-evenly" className="report-sm">
                    <Grid item md={8}>
                        <ReportBox/>
                    </Grid>
                    
                </Grid>
            );
}

export default ReportSuggest;