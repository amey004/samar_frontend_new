import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
  

function Visualize(){
    return (
      <div>
        {/* <Box
          style={{ height: "100vh", marginLeft: "auto", marginRight: "auto" }}
        >
          Map
        </Box> */}
        <Box sx={{ flexGrow: 1 }} paddingBottom={"5vh"}>
          <Grid container justifyContent={"center"} spacing={3}>
            <Grid item xs={12} md={8}>
              <Item>
                <h6>Wardwise Slum Households</h6>
                <Household />
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item>
                <h6>Slum Status</h6>
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
                <h6>Wardwise Slum Count</h6>
                <Wardcount />
              </Item>
            </Grid>
            <Grid item xs={12} md={7}>
              <Item>
                <h6>Tenability</h6>
                <div style={{ height: "50%" }}>
                  <Tenability />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
}

export default Visualize;