import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState,} from 'react';

import CarouselCard from '../components/carouselCard.js';
import ListBox from '../components/listBox.js';
import slum from '../images/slum1.jpg';
import "./App.css";

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

    const [grievances,setgrievances] = useState([]);
    const getData = async () => {
        const data = await axios.get(
          "http://localhost:5000/grievances"
        );
        setgrievances(data.data);
    }
    useEffect(()=>{
        getData();
    },[])

    return (
      <div style={{ marginTop: "12vh" }}>
        <Grid container justifyContent={"space-evenly"}>
          <Grid item md={5}>
            <div style={{ fontWeight: "500", marginTop: "1vh" }}>
              Current Projects
            </div>
            <CarouselCard projectDetails={currentProjects} />
            <div style={{ fontWeight: "500", marginTop: "1vh" }}>
              Past Projects
            </div>
            <CarouselCard projectDetails={pastProjects} />
          </Grid>
          <Grid item md={5}>
            <div
              style={{
                fontWeight: "500",
                marginTop: "1vh",
                marginLeft: "3.5vw",
              }}
            >
              Grievances
            </div>
            <ListBox projectsList={grievances} />
          </Grid>
        </Grid>
      </div>
    );
}

export default DeveloperDashboard;