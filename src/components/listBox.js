import React from "react";
import {List, ListItem, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core";
import {HiChevronDown} from 'react-icons/hi';


function ProjectListItem(props){
    var projectDetails = props.project;

    return (
        <Accordion style={{
            marginBottom:"-10px",
            marginLeft:"auto",
            marginRight:"auto",
            width:"30vw",
            padding:"-10px",
            backgroundColor:"#abecec",
        }}>
            <AccordionSummary style={{height:"5vh", backgroundColor:"#abecec"}} expandIcon={<HiChevronDown/>}>
                {projectDetails.projectName}
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {projectDetails.grievances.map((e) => (<ListItem>{e.message}</ListItem>))}
                </List>
            </AccordionDetails>
        </Accordion>
            
            
        
       
    );
}

function ListBox(props){
   

    console.table(props.projectsList);
    return (
        <div style={{
            backgroundColor:"#4bcece",
            height:"75vh",
            borderRadius:"15px",
            marginLeft:"5vw",
            margin:"2vh",
            width:"35vw",
        }}>
            <List>
                {props.projectsList.map((e) => (
                     <ProjectListItem project={e}/>
                ))}
                
            </List>
        </div>
    );
}

export default ListBox;