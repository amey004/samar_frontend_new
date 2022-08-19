import React from 'react';
import {Divider} from '@material-ui/core';
function Footer(){
    // console.log("In the footer");
    return (
        <div style={{
            backgroundColor:"#FAFAFF",
            height:"7vh",
            // position:"fixed",
            bottom:"0",
            width:"98vw",
        }}>
            <div style={{
                height:"0.1vh",
                marginLeft:"1vw",
                marginRight:"1vw",
                marginBottom:"1vh",
                backgroundColor:"#000000",
            }}></div>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                marginLeft:"1vw",
                marginRight:"1vw",
            }}>
                <div style={{
                    fontSize:"18px",
                    
                    display:"inline-block",
                    
                }}>
                    Copyrights@IMAPS
                </div>
                <div style={{
                    fontSize:"18px",
                    
                    display:"inline-block",
                    
                }}>
                    SIH 2022
                </div>
            </div>
            
            
        </div>
    );
}

export default Footer;