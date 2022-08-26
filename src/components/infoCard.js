import React from 'react';
import {Box} from "@material-ui/core";
function InfoCard(props){
    const info = props.data;
    return (<Box style={{
        height:"15vh",
        width:"30vw",
        backgroundColor:"#f7b5b9",
        margin:"1vh",
        padding:"5px",
        borderRadius:"10px",
    }}>
        <div style={{fontSize:"18px", fontWeight:"500"}}>{info.name}</div>
        <div style={{fontSize:"15px"}}>{info.address}</div>
        <div style={{fontSize:"15px"}}>{info.contact}</div>
    </Box>);
}

export default InfoCard;