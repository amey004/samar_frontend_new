import { Grid } from '@material-ui/core';
import React from 'react';

import CarouselCard from '../components/carouselCard.js';
import ListBox from '../components/listBox.js';
import slum from '../images/slum1.jpg';

function DeveloperDashboard(){

    var currentProjects = [
        {projectId:1,projectName:'Dhankawadi Towers',image:slum},
        {projectId:2,projectName:'Sahakarnagar Heights',image:slum},
        {projectId:3,projectName:'Sai Krupa CHS',image:slum},
        {projectId:4,projectName:'Kumar Heights',image:slum},
        {projectId:5,projectName:'Aundh Housing',image:slum},
        {projectId:6,projectName:'Sai Towers',image:slum},
        {projectId:7,projectName:'Dhankawadi Towers',image:slum},
        {projectId:8,projectName:'Dhankawadi Towers',image:slum},
        {projectId:9,projectName:'Dhankawadi Towers',image:slum}
    ];

    var pastProjects = [
        {projectId:1,projectName:'Sri Ganesh CHS',image:slum},
        {projectId:2,projectName:'Sai Vishwa',image:slum},
        {projectId:3,projectName:'Hanuman Mandir CHS',image:slum},
        {projectId:4,projectName:'Dhankawadi CHS',image:slum},
        {projectId:5,projectName:'Dhankawadi Towers',image:slum},
        {projectId:6,projectName:'Dhankawadi Towers',image:slum},
        {projectId:7,projectName:'Dhankawadi Towers',image:slum},
        {projectId:8,projectName:'Dhankawadi Towers',image:slum},
        {projectId:9,projectName:'Dhankawadi Towers',image:slum}
    ];

    var projectGrievances = [
        {
            projectId:1,
            projectName:"Dhankawadi Towers",
            grievances:[
                {grievanceId:1, message:"Water Supply not regular",projectName:"Dhankawadi Towers",name:"Baburao"},
                {grievanceId:3, message:"No electricity since 2 days",projectName:"Dhankawadi Towers",name:"Ganpatrao"},
                {grievanceId:5, message:"Irregular water supply",projectName:"Dhankawadi Towers",name:"Baburao"},
                {grievanceId:6, message:"No garbage collection facility",projectName:"Dhankawadi Towers",name:"Baburao"}
            ]
        },
        {
            projectId:2,
            projectName:"Sahakarnagar Heights",
            grievances:[
                {grievanceId:2, message:"Garbage collection issue",projectName:"Sahakarnagar Heights"},
                {grievanceId:4, message:"Water Supply not regular",projectName:"Sahakarnagar Heights"},
                {grievanceId:7, message:"Water Supply not regular",projectName:"Sahakarnagar Heights"},
                {grievanceId:8, message:"No place to dump garbage",projectName:"Sahakarnagar Heights"}
            ]
        },
    ];

    return (
        <div>
            <Grid container justifyContent={"space-evenly"}>
                <Grid item xs={5}>
                    <div style={{fontWeight:"500", marginTop:"1vh"}}>Current Projects</div>
                    <CarouselCard projectDetails={currentProjects}/>
                    <div style={{fontWeight:"500", marginTop:"1vh"}}>Past Projects</div>
                    <CarouselCard projectDetails={pastProjects}/>
                </Grid>
                <Grid item xs={5}>
                    <div style={{fontWeight:"500", marginTop:"1vh", marginLeft:"3.5vw"}}>Grievances</div>
                    <ListBox projectsList={projectGrievances}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeveloperDashboard;