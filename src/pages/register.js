import {TextField, Button, Select, MenuItem, Grid} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from "react";
import login from '../lottieFiles/register.json';
import Lottie from "react-lottie";
import { HiOutlineMail, HiLockClosed, HiViewGrid , HiUserCircle} from "react-icons/hi";
import { Link } from 'react-router-dom';

function Register(){
    const [usertype, setUsertype] = useState('developer');
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:login,
        // here is where we will declare lottie animation
        // "animation" is what we imported before animationData: animation,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };

   
    return (
      <div className="login-box">
        <Grid container>
          <Grid item xs={5}>
            <div
              style={{
                fontWeight: 500,
                marginBottom: "0.5vw",
              }}
            >
              REGISTER
            </div>
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Enter Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiUserCircle />
                    </InputAdornment>
                  ),
                }}
                size="small"
              ></TextField>
            </div>
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Enter Email Id"
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiOutlineMail />
                    </InputAdornment>
                  ),
                }}
                size="small"
              ></TextField>
            </div>
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Enter Password"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiLockClosed />
                    </InputAdornment>
                  ),
                }}
                size="small"
              ></TextField>
            </div>
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiLockClosed />
                    </InputAdornment>
                  ),
                }}
                size="small"
              ></TextField>
            </div>
            <div>
              <Select
                style={{
                  marginBottom: "1.5vh",
                  marginTop: "1vh",
                  backgroundColor: "#78e8e8",
                  border: "1vh",
                  height: "2vw",
                  marginLeft: "1vw",
                  fontSize: "14px",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiViewGrid />
                    </InputAdornment>
                  ),
                }}
                value={usertype}
                defaultValue="Select User Type"
              >
                <MenuItem
                  value="developer"
                  style={{
                    // marginBottom:"1vw",
                    fontSize: "14px",
                    // marginLeft:"1.2vw",
                    backgroundColor: "#78e8e8",
                    margin: "-8px",
                    height: "2.5vw",
                  }}
                  onClick={() => setUsertype("developer")}
                >
                  Developer
                </MenuItem>
                <MenuItem
                  value="inhabitant"
                  style={{
                    // marginBottom:"1vw",
                    fontSize: "14px",
                    // marginLeft:"1.2vw",
                    backgroundColor: "#78e8e8",
                    margin: "-8px",
                    height: "2.5vw",
                  }}
                  onClick={() => setUsertype("inhabitant")}
                >
                  Slum Inhabitant
                </MenuItem>
                <MenuItem
                  value="govt"
                  style={{
                    // marginBottom:"1vw",
                    fontSize: "14px",
                    // marginLeft:"1.2vw",
                    backgroundColor: "#78e8e8",
                    margin: "-8px",
                    height: "2.5vw",
                  }}
                  onClick={() => setUsertype("govt")}
                >
                  Government Authority
                </MenuItem>
              </Select>
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  borderRadius: "1.3vw",
                  borderColor: "black",
                  backgroundColor: "#78e8e8",
                  color: "black",
                  margin: "1vw",
                  marginLeft: "3vw",
                  fontSize: "small",
                }}
              >
                Register
              </Button>
            </Link>
            <div>
              <Link
                style={{
                  textTransform: "capitalize",
                  color: "black",
                  fontSize: "12px",
                  marginTop: "1vh",
                  marginLeft: "1vw",
                  marginBottom: "1vh",
                }}
                to="/login"
              >
                Already registered? Click here to sign in
              </Link>
            </div>
          </Grid>
          <Grid item xs={5}>
            <Lottie
              options={defaultOptions}
              style={{
                height: "20vw",
                width: "25vw",
                alignContent: "center",
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
}

export default Register;