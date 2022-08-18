import React from 'react';
import {Box, TextField, ButtonGroup, IconButton, Button} from '@material-ui/core';
import { ImGoogleDrive, ImAttachment, ImImage,ImLink } from "react-icons/im";

function ReportBox(props){
    return (
        <Box style={{
            backgroundColor:"#abecec",
            height:"75vh",
            // marginTop:"15vh",
            borderRadius:"15px",
            marginLeft:"5vw",
            margin:"2vh",
            width:"35vw",
            padding:"10px",
            paddingLeft:"2vw",
            paddingRight:"2vw",
        }}>
            <div>{props.question}</div>
            <div>{props.report}</div>
            <div
            style={{
                marginLeft:"2vh",
                
            }}
            >Name</div>
            <TextField
                hiddenLabel
                // placeholder="Enter Name"
                // variant="outlined"
                type="text"
                size="small"
                style={{
                    margin:"2vh",
                    
                }}
                />
            <div
            style={{
                marginLeft:"2vh",
                
            }}
            >Email Address</div>
            <TextField
                hiddenLabel
                // placeholder="Enter Email Id"
                type="email"
                // variant="outlined"
                size="small"
                style={{
                    margin:"2vh",
                    
                }}
                />
            <div
            style={{
                marginLeft:"2vh",
                
            }}
            >Explain in detail</div>
           <TextField
                hiddenLabel
                multiline
                rows={5}
                // fullWidth
                // placeholder="Enter Name"
                // variant="outlined"
                size="small"
                style={{
                    marginTop:"2vh",
                    marginLeft:"2vh",              
                }}
                />
                <div>
                    <ButtonGroup style={{
                    // paddingTop:"0.5vh",
                    marginTop:"1vh",
                    marginLeft:"2vw",
                    borderRadius:"5px",
                    backgroundColor:"#78e8e8",
                    width:"11vw",
                }}>
                        <IconButton size={"small"}>
                            <ImGoogleDrive/>
                        </IconButton>
                        <IconButton size={"small"}>
                            <ImAttachment/>
                        </IconButton>
                        <IconButton size={"small"}>
                            <ImImage/>
                        </IconButton>
                        <IconButton size={"small"}>
                            <ImLink/>
                        </IconButton>
                    </ButtonGroup>
                </div>
                <Button  variant='contained' style={{
                        borderRadius: "1.3vw",
                        borderColor:"black",
                        backgroundColor: "#78e8e8",
                        color:"black",
                        margin:"2vw",
                        marginBottom:"1vw",
                        marginLeft:"5vw",
                        fontSize: "small"
                        }}>{props.action}</Button>
        </Box>
        
    );
}

export default ReportBox;