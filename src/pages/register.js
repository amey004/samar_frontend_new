import {TextField, Button, Select, MenuItem, Grid} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import React, { useEffect, useState ,useContext} from "react";
import login from '../lottieFiles/register.json';
import Lottie from "react-lottie";
import { HiOutlineMail, HiLockClosed, HiViewGrid , HiUserCircle} from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import AuthContext from "../context/AuthContext";
// require('dotenv').config();

function Register(){
    const [category, setcategory] = useState('authority');
    const [username,setusername] = useState('');
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [verifypassword, setverifypassword] = useState("");
    const navigate = useNavigate();
    const {role,setrole,loggedIn} = useContext(AuthContext);
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
     

    const sendData = async (e) => {
      try {
        console.log(username, email, password, category);
        console.log(process.env.REACT_APP_SERVER_URL);
        await axios.post("https://samarserver.herokuapp.com/user/signup", {
          username,
          email,
          password,
          category,
        });
        navigate("/");
      } catch (error) {
        console.log(error.response.data)
      }

     }
     useEffect(() => {
        console.log(role);
        console.log(loggedIn);
     },[loggedIn,setrole,role])
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
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
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
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
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
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
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
                value={verifypassword}
                onChange={(e) => {
                  setverifypassword(e.target.value);
                }}
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
                value={category}
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
                  onClick={() => {
                    setcategory("developer")
                    setrole('developer')
                  }}
                >
                  Developer
                </MenuItem>
                <MenuItem
                  value="authority"
                  style={{
                    // marginBottom:"1vw",
                    fontSize: "14px",
                    // marginLeft:"1.2vw",
                    backgroundColor: "#78e8e8",
                    margin: "-8px",
                    height: "2.5vw",
                  }}
                  onClick={() => {
                    setcategory("authority")
                    setrole('authority');
                }}
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
                onClick={sendData}
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