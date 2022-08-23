import React from "react";
import {List, ListItem, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core";
import {HiChevronDown} from 'react-icons/hi';


function ProjectListItem(props){
    var projectDetails = props.project;
    console.log(projectDetails);
    return (
        <Accordion style={{
            marginBottom:"-10px",
            marginLeft:"auto",
            marginRight:"auto",
            width:"30vw",
            padding:"-10px",
            backgroundColor:"#EEF0F2",
        }}>
            <AccordionSummary style={{height:"5vh", backgroundColor:"#EEF0F2"}} expandIcon={<HiChevronDown/>}>
                {projectDetails.projectname}
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {projectDetails.grievances.map((e,key) => (<ListItem style={{display:"list-item" }}  key={key}>{e.subject}</ListItem>))}
                </List>
            </AccordionDetails>
        </Accordion>
            
            
        
       
    );
}

function ListBox(props){
   
    console.table(props.projectsList);
    return (
        <div style={{
            backgroundColor:"#478e93",
            height:"75vh",
            borderRadius:"15px",
            marginLeft:"5vw",
            margin:"2vh",
            width:"35vw",
        }}>
            <List>
                {props.projectsList.map((e,key) => (
                     <ProjectListItem project={e} key={key}/>
                ))}
                
            </List>
        </div>
    );
}

export default ListBox;