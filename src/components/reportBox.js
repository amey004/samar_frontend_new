import React, { useState,useEffect } from 'react';
import {Box, TextField, Button, Select, MenuItem,Grid} from '@material-ui/core';
import slum from '../images/slum1.jpg';
import axios from "axios"
import "./App.css"

function ReportBox(){
    const [project, setProject] = useState();
    const [projects,setProjects] = useState([]);
    const [name,setname] = useState();
    const [email,setemail] = useState();
    const [subject,setsubject] = useState();
    const [detail,setdetail] = useState();
    const sendData = () =>{
      console.log(name,email,subject,project,detail);
      axios.post("http://localhost:5000/report");
    }
    const handleChange = (event) => {
        console.log(event.target.value)
        setProject(event.target.value);
      };
    useEffect(() => {
      const  fetchData = async () =>{
          var data = await axios.get("http://localhost:5000/projects");
          console.log(data.data);
          setProjects(data.data);
          data.data.forEach((info)=>{
            console.log(info);
          })
          console.log(data.data['0']);
          console.log(projects)
      }
      fetchData();
    }, [project,name,email,subject,detail,projects]);
    return (
      <Grid container justifyContent={"space-evenly"}>
        <Grid className="boxes" item sm={11} md={4}>
          <Box
            style={{
              backgroundColor: "#EEF0F2",
              height: "85vh",
              marginTop: "15vh",
              marginBottom: "2vh",
              borderRadius: "15px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "90%",
              padding: "10px",
              paddingLeft: "2vw",
              paddingRight: "2vw",
            }}
          >
            <div>Saw any misconduct happening around you?</div>
            <div>REPORT HERE</div>
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
              onChange={(e) => handleChange(e)}
              style={{
                margin: "1vh",
                height: "40px",
                width: "200px",
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
              Explain in detail
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
                marginTop: "1vh",
                width: "70%",
                marginLeft: "7px",
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
                  marginBottom: "1vw",
                  marginLeft: "5vw",
                  fontSize: "small",
                }}
              >
                Report
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    );
}

export default ReportBox;