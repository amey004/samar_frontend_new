import React from "react";
import ReportBox from "../components/reportBox";
import image from '../images/slum4.jpg';
import {Grid} from '@material-ui/core';
function ReportSuggest(){
    return (
                <Grid container justifyContent="space-evenly">
                    <Grid item md={8}>
                        <ReportBox/>
                    </Grid>
                    
                </Grid>
            );
}

export default ReportSuggest;