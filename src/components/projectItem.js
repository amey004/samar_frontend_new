import React from "react";
import { Box, Card } from '@material-ui/core';

function ProjectItem(props){
    // console.log(props.data.image);
    return (
            <Card style={{
                margin:"5px",
                height:"30vh",
                width:"10vw",
                padding:"5px",
                backgroundColor:"#78e8e8",
                borderRadius:"15px",
                textAlign:"center"
            }}>
                <Box style={{
                    margin:"3px",
                    height:"20vh",
                    backgroundColor:"#e8f6f6",
                    border:"2px solid #78e8e8",
                    borderRadius:"7px",

                }}></Box>
                <div></div>
                {props.data.projectName}
            </Card>
    );
}

export default ProjectItem;