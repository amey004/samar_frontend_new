import {TextField, Button, Select, MenuItem} from "@mui/material";
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

   
    return(
        <div className='login-box'>
                <div classname='row-login'>
                    <div style={{
                            fontWeight:500,
                            marginBottom:"0.5vw"
                        }}>REGISTER</div>
                    <div>
                        <TextField id='outlined-basic' placeholder='Enter Name' color="primary" variant="outlined" style={{
                            marginBottom:"1vw",
                            backgroundColor:"#FFD379"
                            }} 
                            InputProps={{
                            startAdornment: <InputAdornment position="start"><HiUserCircle/></InputAdornment>,
                            }} size='small'></TextField>
                    </div>
                    <div>
                        <TextField id='outlined-basic' placeholder='Enter Email Id' color="primary" variant="outlined" 
                            style={{
                                marginBottom:"1vw",
                                backgroundColor:"#FFD379"
                                }} 
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><HiOutlineMail/></InputAdornment>,
                                }} size='small'></TextField>
                    </div>
                    <div>
                        <TextField id='outlined-basic' placeholder='Enter Password' color="primary" variant="outlined" 
                        style={{
                            marginBottom:"1vw",
                            backgroundColor:"#FFD379"
                            }} 
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><HiLockClosed/></InputAdornment>,
                            }} size='small'></TextField>
                    </div >
                    <div>
                        <TextField id='outlined-basic' placeholder='Confirm Password' color="primary" variant="outlined" 
                        style={{
                            marginBottom:"1vw",
                            backgroundColor:"#FFD379"
                            }} 
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><HiLockClosed/></InputAdornment>,
                            }} size='small'></TextField>
                    </div >
                    <div>
                        <Select style={{
                            marginBottom:"1vw",
                            backgroundColor:"#FFD379",
                            height:"2vw",
                            marginLeft:"1vw",
                            // width:"12vw",
                            fontSize:"14px"
                            }} 
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><HiViewGrid/></InputAdornment>,
                                }}
                            value={usertype} defaultValue="Select User Type">
                            <MenuItem value="developer" style={{
                                // marginBottom:"1vw",
                                fontSize:"14px",
                                marginLeft:"1.2vw",
                                backgroundColor:"#FFD379",
                                height:"2.5vw"
                                }}
                                onClick={() => setUsertype('developer')}
                                >Developer</MenuItem>
                            <MenuItem value="inhabitant" style={{
                                // marginBottom:"1vw",
                                fontSize:"14px",
                                marginLeft:"1.2vw",
                                backgroundColor:"#FFD379",
                                height:"2.5vw"
                                }}
                                onClick={() => setUsertype('inhabitant')}
                                >Slum Inhabitant</MenuItem>
                            <MenuItem value="govt" style={{
                                // marginBottom:"1vw",
                                fontSize:"14px",
                                marginLeft:"1.2vw",
                                backgroundColor:"#FFD379",
                                height:"2.5vw"
                                }}
                                onClick={() => setUsertype('govt')}
                                >Government Authority</MenuItem>
                            </Select>
                    </div>
                    <Link to="/data" style={{ textDecoration: 'none' }}>
                        <Button variant='contained' style={{
                            borderRadius: "1.3vw",
                            borderColor:"black",
                            backgroundColor: "#FFD379",
                            color:"black",
                            margin:"1vw",
                            marginLeft:"5vw",
                            fontSize: "small"
                            }}>Register</Button>
                    </Link>
                    <div style={{
                        textTransform: 'capitalize',
                        color:'black',
                        fontSize: '12px',
                        marginLeft:"5vw",
                        marginBottom:"0.5vw"
                    }}>Forgot Password?</div>
                    <Link style={{
                        textTransform: 'capitalize',
                        color:'black',
                        fontSize: '12px',
                        marginLeft:"1vw",
                        marginBottom:"2vw"
                    }} to="/login">Already registered? Click here to sign in</Link>
                </div>
                <div classname='row-login'>
                    <Lottie options={defaultOptions} height={"20vw"} width={"25vw"} />
                </div>            
        </div>
    );
}

export default Register;