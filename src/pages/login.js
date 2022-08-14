import { ToggleButton, ToggleButtonGroup, TextField, Button} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from "react";
import login from '../lottieFiles/register.json';
import Lottie from "react-lottie";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Login(){
    const [usertype, setUsertype] = useState('developer');
    const [page, setPage] = useState('/data');
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

    function handleLogin() {
        console.log(usertype);
        if(usertype === 'developer'){
            setPage('/dev-dashboard');
        }
        else if(usertype === 'govt'){
            setPage('/error');
        }
     }

   
    return(
        <div className='login-box'>
                <div classname='row-login'>
                    <div style={{
                        fontWeight:500,
                        marginBottom:"0.5vw",
                        marginTop:"1vh"
                    }}>LOGIN</div>
                    <ToggleButtonGroup size="small" style={{
        backgroundColor:'#abecec',
        padding:"5px",
        borderRadius: "1.3vw",
        borderColor:'#000000',
        fontSize: 'x-small',
        marginTop:"1vw",
     }} exclusive value={usertype}>
                        <ToggleButton style={{
        backgroundColor:usertype==='developer'? '#78e8e8':'#abecec',
        color:'black',
        textTransform: 'capitalize',
        borderRadius: "1.3vw",
        borderColor:usertype==='developer'? '#78e8e8':'#abecec',
        fontSize: 'x-small',
     }} value='developer' onClick={() => setUsertype('developer')}>Developer</ToggleButton>
                        <ToggleButton style={{
        backgroundColor:usertype==='inhabitant'? '#78e8e8':'#abecec',
        textTransform: 'capitalize',
        color:'black',
        borderRadius: "1.3vw",
        borderColor:usertype==='inhabitant'?"78e8e8":'#abecec',
        fontSize: 'x-small',
     }} value='inhabitant' onClick={() => setUsertype('inhabitant')}>Slum Inhabitant</ToggleButton>
                        <ToggleButton style={{
        backgroundColor:usertype==='govt'? '#78e8e8':'#abecec',
        textTransform: 'capitalize',
        color:'black',
        borderRadius: "1.3vw",
        borderColor:usertype==='govt'? '#78e8e8':'#abecec',
        fontSize: 'x-small',
     }} value='govt' onClick={() => setUsertype('govt')}>Government Authority</ToggleButton>
                    </ToggleButtonGroup>
                    <div className="textfield">
                        <TextField id='outlined-basic' label='Enter Email Id' variant="outlined" InputProps={{
                            startAdornment: <InputAdornment position="start"><HiOutlineMail/></InputAdornment>,
                            }} size='small'></TextField>
                    </div>
                    <div className="textfield">
                        
                        <TextField id='outlined-basic'  label="Password" type="password" color="primary" variant="outlined" InputProps={{
                            startAdornment: <InputAdornment position="start"><HiLockClosed/></InputAdornment>,
                            }} size='small'></TextField>
                    </div >
                    <Link to={page} style={{ textDecoration: 'none' }}>
                        <Button variant='contained' style={{
                            borderRadius: "1.3vw",
                            borderColor:"black",
                            backgroundColor: "#78e8e8",
                            color:"black",
                            margin:"2vw",
                            marginBottom:"1vw",
                            marginLeft:"5vw",
                            fontSize: "small"
                            }}
                            onClick={()=>handleLogin}>Login</Button>
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
                        marginLeft:"1.2vw",
                        marginBottom:"2vw"
                    }} to="/register">Don't have an account? Register here</Link>
                </div>
                <div classname='row-login'>
                    <Lottie options={defaultOptions} height={"20vw"} width={"25vw"} />
                </div>            
        </div>
    );
}

export default Login;