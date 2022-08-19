import React from "react";
import { Grid } from '@material-ui/core';
import ReportBox from "../components/reportBox";

function ReportSuggest(){
    return (
        <div style={{marginTop:"18vh"}}>
            <Grid container justifyContent={"space-evenly"}>
                <Grid item xs={5}>
                    <ReportBox question={"Saw any misconduct happening around you?"} report={"REPORT HERE"} action={"Report"}/>
                </Grid>
                <Grid item xs={5}>
                    <ReportBox question={"Have any suggestions?"} action={"Submit"}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default ReportSuggest;