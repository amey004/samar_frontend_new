import React, { useState } from 'react';
import {Box, TextField, Button, Select, MenuItem} from '@material-ui/core';
import slum from '../images/slum1.jpg';

function ReportBox(){

    var projects = [
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

    const [project, setProject] = useState('Select Project');
    const handleChange = (event) => {
        setProject(event.target.value);
      };

    return (
        <Box style={{
            backgroundColor:"#EEF0F2",
            height:"85vh",
            marginTop:"15vh",
            marginBottom:"2vh",
            borderRadius:"15px",
            marginLeft:"auto",
            marginRight:"auto",
            width:"35vw",
            padding:"10px",
            paddingLeft:"2vw",
            paddingRight:"2vw",
        }}>
            <div>Saw any misconduct happening around you?</div>
            <div>REPORT HERE</div>
            <div
            style={{
                marginLeft:"1vh",
                
            }}
            >Name</div>
            <TextField
                hiddenLabel
                type="text"
                size="small"
                variant='outlined'
                style={{
                    margin:"1vh",
                }}
                />
            <div
            style={{
                marginLeft:"1vh",
                
            }}
            >Email Address</div>
            <TextField
                hiddenLabel
                type="email"
                size="small"
                variant='outlined'
                style={{
                    margin:"1vh",
                    
                }}
                />
                <div
            style={{
                marginLeft:"1vh",
                
            }}
            >Project Name</div>
            <Select
                hiddenLabel
                select
                size="small"
                value={project}
                variant='outlined'
                onChange={handleChange}
                style={{
                    margin:"1vh",
                }}
                >
                    {projects.map((e) => (
                        (<MenuItem value={e.projectName}>{e.projectName}</MenuItem>)
                    ))}
                </Select>
                <div
            style={{
                marginLeft:"1vh",
                
            }}
            >Subject</div>
            <TextField
                hiddenLabel
                type="text"
                size="small"
                variant='outlined'
                fullWidth
                style={{
                    margin:"1vh",
                    width:"20vw"
                    
                }}
                />
            <div
            style={{
                marginLeft:"1vh",
            }}
            >Explain in detail</div>
           <TextField
                hiddenLabel
                multiline
                rows={2}
                size="small"
                variant='outlined'
                style={{
                    marginTop:"1vh",
                    marginLeft:"2vh",              
                }}
                />
                <div>
                <Button  variant='contained' style={{
                        borderRadius: "1.3vw",
                        borderColor:"black",
                        backgroundColor: "#197278",
                        color:"#FFFFFF",
                        margin:"2vw",
                        marginBottom:"1vw",
                        marginLeft:"5vw",
                        fontSize: "small"
                        }}>Report</Button>
                </div>
                
        </Box>
        
    );
}

export default ReportBox;