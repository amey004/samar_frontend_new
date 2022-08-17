import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Household} from "./Charts/household";
import {Status} from "./Charts/status";
import {Tenability} from "./Charts/tenability";
import {Wardcount} from "./Charts/wardwisecount"
import Map from "./kepler/maps";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"100%",
    height:"100%",
  }));
  

function Visualize(){
    return (
      <div>
        <Box
          style={{ height: "100vh", marginLeft: "auto", marginRight: "auto", alignContent:"center", justifyContent:"center"}}
        >
          Map
         {/* <Map/> */}
        </Box>
        <Box sx={{ flexGrow: 1 }} paddingBottom={"5vh"}>
          <Grid container justifyContent={"center"} spacing={3} >
            <Grid item xs={12} md={8}>
              <Item>
                <h4>Wardwise Slum Households</h4>
                <Household />
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item>
                <h4>Slum Status</h4>
                <div
                  style={{
                    marginTop: "17%",
                  }}
                >
                  <Status />
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                <h4>Wardwise Slum Count</h4>
                <Wardcount />
              </Item>
            </Grid>
            <Grid item xs={12} md={7}>
              <Item>
                <h4>Tenability</h4>
                <div style={{ height: "50%" }}>
                  <Tenability />
                </div>
              </Item>
            </Grid>
            {/* <Grid item xs={12} md={11}>
              <Item>xs=4</Item>
            </Grid> */}
          </Grid>
        </Box>
        <Box width={"90vw"} height={"20vh"} marginLeft={"auto"} marginRight={"auto"}>
          <Paper>SSI Meter</Paper>
        </Box>
      </div>
    );
}

export default Visualize;