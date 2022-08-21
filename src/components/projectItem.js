import React from "react";
import { Box, Card } from '@material-ui/core';

function ProjectItem(props){
    // console.log(props.data.image);
    return (
            <Card style={{
                margin:"5px",
                height:"30vh",
                width:"150px",
                padding:"5px",
                backgroundColor:"#8cb9bc",
                borderRadius:"15px",
                textAlign:"center"
            }}
            >
                <Box style={{
                    margin:"3px",
                    height:"20vh",
                    backgroundColor:"#FAFAFF",
                    border:"2px solid #8cb9bc",
                    borderRadius:"7px",

                }}></Box>
                <div style={{fontSize:"12px"}}>{props.data.projectName}</div>
                
            </Card>
    );
}

export default ProjectItem;