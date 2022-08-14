import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"70vh",
  }));
  

function Visualize(){
    return (
        <div>
            <Box style={{height:"100vh", marginLeft:"auto",marginRight:"auto"}}>
                Map
            </Box>
            <Box  sx={{ flexGrow: 1 }} position={'center'} alignItems={'center'} paddingBottom={"5vh"} paddingLeft={"15vh"}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item>xs=7</Item>
                    </Grid>
                    <Grid item xs={11}>
                        <Item>xs=4</Item>
                    </Grid>
                    
                </Grid>
            </Box>
            
        </div>
    );
}

export default Visualize;