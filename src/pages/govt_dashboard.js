
import React,{useEffect,useContext, useState} from 'react';
import slum from '../images/slum1.jpg';
import CarouselCard from '../components/carouselCard.js';
import { Grid, Button , Select, MenuItem} from '@material-ui/core';
import { Link } from "react-router-dom";
import Notices from '../components/noticesCard';
import FileUpload from '../components/fileUpload';
import Visualize from "./visualization.js";
import AuthContext from '../context/AuthContext';
import "./App.css"

function GovernmentDashboard(){
    const {role} = useContext(AuthContext)
    const [ward,setWard] = useState("");
    const [wards, setWards] = useState(["ALL"]);
    // console.log(role)
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
    
    const handleChange = (event) => {
      setWard(event.target.value);
      // console.log(ward);
    };
    const getData = () =>{
      fetch('./data.json'
        , {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      ).then((data) => {
        const res = data.json();
        return res;
      }).then((res) => {
        for(var i of res) {
            if (!wards.includes(i.WARD_2017)) {
              setWards([...wards, i.WARD_2017]);
            }
          }
          console.log(wards);

      }).catch(e => {
        console.log("error", e)
      })
    };

    useEffect(()=>{getData();},[ward,wards]);


    
    return (
      <div className="govtdash" style={{ marginTop: "12vh" }}>
        <h1
          className="heading-stat"
          style={{
            fontWeight: "500",
            marginTop: "1vh",
            marginLeft: "4vw",
            marginBottom: "1vh",
          }}
        >
          Statistics
        </h1>
        <Grid container justifyContent={"space-evenly"}>
          <Grid item xs={12} md={5}  style={{ marginLeft: "auto" }} className="heading-stat">
            <label style={{ marginRight: "20px" }}>Select ward: </label>
            <Select
              placeholder="Select a ward"
              value={ward}
              label={"Select Ward"}
              onChange={handleChange}
              style={{
                backgroundColor: "#FFFFFF",
                minWidth:"100px",
                color: "#197278",
                marginTop: "2vh",
                marginBottom: "2vh",
              }}
              autoWidth={true}
            >
              {wards.map((e) => (
                <MenuItem value={e} key={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item md={5} sm={12}>
            <Link to="/detailed-report" style={{ textDecoration: "none" }}>
              <Button
                className="button-detail"
                style={{
                  backgroundColor: "#197278",
                  color: "#FFFFFF",
                  marginTop: "2vh",
                  marginLeft: "16vw",
                  marginBottom: "2vh",
                }}
              >
                <div>View Detailed Report</div>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={11}>
            <Visualize ward={ward} />
          </Grid>
          <Grid item xs={12}></Grid>
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
          <Grid item md={8}>
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
          </Grid>
          <Grid item md={3}>
            <Link to="/documents/UploadDataSample.xlsx" target={"_blank"} download>
            <div style={{
              marginTop: "1vh",
              marginLeft: "4vw",
              marginBottom: "1vh",
            }}>Download Sample Template</div>
            </Link>
            
            
          </Grid>
        </Grid>
        
        
        <FileUpload />
      </div>
    );
}

export default GovernmentDashboard;