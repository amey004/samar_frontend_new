import React, { useState } from "react";
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import {Button, Box, Grid, Paper} from "@material-ui/core";
import {Household} from "./Charts/household";
import {Status} from "./Charts/status";
import {Tenability} from "./Charts/tenability";
import {Wardcount} from "./Charts/wardwisecount"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"100%",
    height:"100%",
  }));
  

function Visualize(props){
    return (
      <div>
        {/* <Box
          style={{ height: "100vh", marginLeft: "auto", marginRight: "auto" }}
        >
          Map
        </Box> */}
        <Box sx={{ flexGrow: 1 }} paddingBottom={"5vh"}>

          <Grid container justifyContent={"space-evenly"} spacing={3}>
          
            <Grid item xs={5} md={4}>
              <Item>
              {props.ward === "ALL" || props.ward === ""
                ? <h6>Wardwise Slum Households</h6>
              : <h6>Slum Households for Ward <br/> {props.ward}</h6>
              }
                <Household  ward={props.ward}/>
              </Item>
            </Grid>
            <Grid item xs={5} md={5}>
              <Item>
                {props.ward === "ALL" || props.ward === ""
                ? <h6>Wardwise Slum Count</h6>
              : <h6>Slum Count for Ward <br/> {props.ward}</h6>
              }
              
                <div
                  style={{
                    marginTop: "-10%",
                    marginBottom:"-10%",
                  }}
                >
                <Wardcount ward={props.ward}/>
                </div>
              </Item>
            </Grid>
            
            <Grid item xs={5} md={4}>
              <Item>
              {props.ward === "ALL" || props.ward === ""
                ? <h6>Wardwise Tenability</h6>
              : <h6>Tenability for Ward <br/> {props.ward}</h6>
              }
                <div style={{ height: "50%" }}>
                  <Tenability ward={props.ward}/>
                </div>
              </Item>
            </Grid>
            <Grid item xs={5} md={6}>
              <Item>
              {props.ward === "ALL" || props.ward === ""
                ? <h6>Wardwise Slum Status</h6>
              : <h6>Slum Status for Ward <br/> {props.ward}</h6>
              }
                <div
                  style={{
                    marginTop: "-17%",
                    marginBottom:"-10%",
                  }}
                >
                  <Status  ward={props.ward}/>
                </div>
                
              </Item>
            </Grid>
            
           
          </Grid>
        </Box>
      </div>
    );
}

export default Visualize;