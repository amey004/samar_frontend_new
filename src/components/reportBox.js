import React, { useState,useEffect } from 'react';
import {Box, TextField, Button, Select, MenuItem,Grid} from '@material-ui/core';
import axios from "axios"
import "./App.css"
import { injectStyle } from "react-toastify/dist/inject-style";
import {toast,ToastContainer} from "react-toastify"

 
if (typeof window !== "undefined") {
  injectStyle();
}

function ReportBox(){
    const [project, setProject] = useState(0);
    const [projects,setProjects] = useState([]);
    const [name,setname] = useState(undefined);
    const [email,setemail] = useState(undefined);
    const [subject,setsubject] = useState(undefined);
    const [detail,setdetail] = useState(undefined);

    const sendData = async () =>{
      try {
        const data = await axios.post(
          "https://samarserver.herokuapp.com/report",
          {
            project,
            name,
            email,
            subject,
            detail,
          }
        );
        console.log(data.status);
        if (data.status === 200) {
          toast.success("Grievance reported successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        console.log(error);
        toast.error(`Couldn't report grievance. \nTry Again!`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setProject(event.target.value);
        // setporjectname(event.target.value)
      };
    useEffect(() => {
      const  fetchData = async () =>{
          var data = await axios.get(
            "https://samarserver.herokuapp.com/fetchdata?table=projects"
          );
          console.log(data.data);
          setProjects(data.data);
      }
      fetchData();
    }, [project,name,email,subject,detail]);
    return (
      <Box style={{
        backgroundColor: "#EEF0F2",
        height: "80vh",
        marginTop: "12vh",
        marginBottom: "2vh",
        borderRadius: "15px",
        marginLeft: "auto",
        marginRight: "auto",
        // width: "90%",
        justifyContent:"space-evenly",
        padding: "10px",
        paddingLeft: "2vw",
        paddingRight: "2vw",
      }}>
            <Grid container>
              <Grid item md={5}>
              <div style={{fontSize:"20px"}}>Post Your Grievance</div>
              <div
                style={{
                  marginLeft: "1vh",
                }}
              >
                Name
              </div>
              <TextField
                hiddenLabel
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                size="small"
                variant="outlined"
                style={{
                  margin: "1vh",
                }}
              />
              <div
                style={{
                  marginLeft: "1vh",
                }}
              >
                Email Address
              </div>
              <TextField
                hiddenLabel
                type="email"
                size="small"
                variant="outlined"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                style={{
                  margin: "1vh",
                  
                }}
              />
              <div
                style={{
                  marginLeft: "1vh",
                  
                }}
              >
                Project Name
              </div>
              <Select
                hiddenLabel
                select
                size="small"
                autoWidth={true}
                value={project}
                variant="outlined"
                onChange={(e) => {handleChange(e)}}
                style={{
                  margin: "1vh",
                  height: "3vh",
                  width: "14vw",
                }}
              >
                {projects.map((e, key) => (
                  <MenuItem value={e.id} key={e.id}>
                    {e.name}
                  </MenuItem>
                ))}
              </Select>
              <div
                style={{
                  marginLeft: "1vh",
                }}
              >
                Subject
              </div>
              <TextField
                hiddenLabel
                type="text"
                size="small"
                variant="outlined"
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
                fullWidth
                style={{
                  margin: "1vh",
                  width: "70%",
                }}
              />
              <div
                style={{
                  marginLeft: "1vh",
          
                }}
              >
              Grievance Details
              </div>
              <TextField
                hiddenLabel
                multiline
                rows={4}
                size="small"
                variant="outlined"
                value={detail}
                onChange={(e) => setdetail(e.target.value)}
                style={{
                  margin: "1vh",
                  width: "70%",
                }}
              />
              <div>
                <Button
                  variant="contained"
                  onClick={() => sendData()}
                  style={{
                    borderRadius: "1.3vw",
                    borderColor: "black",
                    backgroundColor: "#197278",
                    color: "#FFFFFF",
                    margin: "2vw",
                    marginBottom: "1vh",
                    marginLeft: "5vw",
                    fontSize: "small",
                  }}
                >
                  Report
                </Button>
              </div>
              </Grid>
              <Grid item md={2} style={{marginTop:"auto", marginBottom:"auto"}}>OR</Grid>
              <Grid item md={5} style={{marginTop:"auto", marginBottom:"auto"}}>
                <div justifyContent={"center"}>
                  <div style={{ fontSize:"20px", marginBottom:"1vh"}}>Helpline Number</div>
                  <div style={{margin:"1vh"}}>For any grievances, call on</div>
                  <div style={{margin:"1vh", fontSize:"30px",opacity:"0.75", color:"red", fontWeight:"500"}}>020 2400 2400</div>
                </div>
                </Grid>
            </Grid>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme='dark'
        />
      </Box>
    );
}

export default ReportBox;