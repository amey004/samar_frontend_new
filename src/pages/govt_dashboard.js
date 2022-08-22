import React,{useEffect,useContext, useState} from 'react';
import slum from '../images/slum1.jpg';
import CarouselCard from '../components/carouselCard.js';
import { Grid, Button, Box , Select} from '@material-ui/core';
import Notices from '../components/noticesCard';
import FileUpload from '../components/fileUpload';
import Visualize from "./visualization.js";
import AuthContext from '../context/AuthContext';
import "./App.css"

function GovernmentDashboard(){
    const {role} = useContext(AuthContext)
    // const [ward,setWard] = useState("ALL");
    console.log(role)
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

    var upcomingProjects = [
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

    var noticesList = [
        {noticeId:1, recipient:"Sevak Vijayabhas",subject:"Illegal Renting of flat allotted 2 years back",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:2, recipient:"Hanuman Sundaramoorthy",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:3, recipient:"Bhrij Shreekant",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:4, recipient:"Ranajit Prithu",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:5, recipient:"Aslam Mahadev Salil",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:6, recipient:"Bankebihari Samrat Yashodhar",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        // {noticeId:7, recipient:"Baburao",subject:"Illegal Renting"},
        // {noticeId:8, recipient:"Baburao",subject:"Illegal Renting"},
    ];

    return (
      <div className="govtdash" style={{ marginTop: "12vh" }}>
        <Grid container justifyContent={"space-evenly"}>
          
          <Grid item xs={11}>
            <div
              className="heading-stat"
              style={{
                fontWeight: "500",
                marginTop: "1vh",
                marginLeft: "4vw",
                marginBottom: "1vh",
              }}
            >
              Statistics
            </div>
            <Button
                className="button-detail"
                style={{
                  backgroundColor: "#197278",
                  color: "#FFFFFF",
                  marginTop: "2vh",
                  marginLeft: "80vw",
                  marginBottom: "2vh",
                }}
              >
                View Detailed Report
              </Button> 
            <Visualize />
          </Grid>
          <Grid item xs={12}>
              
          </Grid>
          <Grid item md={5} className="carousel">
            <div style={{ fontWeight: "500", marginTop: "1vh" }}>
              Current Projects
            </div>
            <CarouselCard projectDetails={currentProjects} />
          </Grid>
          <Grid item md={5} className="carousel">
            <div style={{ fontWeight: "500", marginTop: "1vh" }}>
              Past Projects
            </div>
            <CarouselCard projectDetails={pastProjects} />
          </Grid>
          <Grid item md={5} className="carousel">
            <div style={{ fontWeight: "500", marginTop: "1vh" }}>
              Upcoming Projects
            </div>
            <CarouselCard projectDetails={upcomingProjects} />
          </Grid>
          <Grid item md={5} className="carousel">
            <div style={{ fontWeight: "500", marginTop: "1vh" }}>Notices</div>
            <Notices notices={noticesList} />
          </Grid>
        </Grid>
        <div
          style={{
            fontWeight: "500",
            marginTop: "1vh",
            marginLeft: "4vw",
            marginBottom: "1vh",
          }}
        >
          Add More Data
        </div>
        <FileUpload />
      </div>
    );
}

export default GovernmentDashboard;