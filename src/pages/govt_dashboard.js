import React from 'react';
import slum from '../images/slum1.jpg';
import CarouselCard from '../components/carouselCard.js';
import { Grid } from '@material-ui/core';
import Notices from '../components/noticesCard';

function GovernmentDashboard(){
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
        <div >
            <Grid container justifyContent={"space-evenly"}>
                <Grid item xs={5}>
                    <div style={{fontWeight:"500", marginTop:"1vh"}}>Current Projects</div>
                    <CarouselCard projectDetails={currentProjects}/>
                    <div style={{fontWeight:"500", marginTop:"1vh"}}>Past Projects</div>
                    <CarouselCard projectDetails={pastProjects}/>
                </Grid>
                <Grid item xs={5}>
                    <div style={{fontWeight:"500", marginTop:"1vh"}}>Upcoming Projects</div>
                    <CarouselCard projectDetails={upcomingProjects}/>
                    <div style={{fontWeight:"500", marginTop:"1vh"}}>Notices</div>
                    <Notices notices={noticesList}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default GovernmentDashboard;