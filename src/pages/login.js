import {
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Button,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState, useEffect,useContext } from "react";
import login from "../lottieFiles/register.json";
import Lottie from "react-lottie";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {Alert} from "reactstrap"
import AuthContext from "../context/AuthContext";
import "./App.css";

axios.defaults.withCredentials = true;
function Login() {
  const [category, setcategory] = useState("authority");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [status, setstatus] = useState(200);
  const[error,seterror] = useState("");
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {role,getLoggedIn,loggedIn,setrole} = useContext(AuthContext);

  useEffect(()=>{

  },[loggedIn,role])

  const sendData = async (e) => {
    try {
      console.log(email, password, category);
      console.log(process.env.REACT_APP_SERVER_URL);
      await axios.post("http://localhost:5000/user/signin", {
        email,
        password,
        category,
      });
      console.log(email,password,category)
      await getLoggedIn();
      if(category==='developer'){
        navigate("/dev-dashboard");
      }else if(category==='authority'){
        navigate("/govt-dashboard");
      }
      
    } catch (error) {
      setstatus(error.response.status);
      seterror(error.response.data.error);
      console.log(error.response);
      console.log(error.response.data);
    }
  };

  useEffect(() => {}, [category, status,error]);

  return (
    <div className="login-box login-sm">
      <div classname="row-login">
        <div
          style={{
            fontWeight: 500,
            marginBottom: "0.5vw",
            marginTop: "1vh",
          }}
        >
          LOGIN
        </div>
        <ToggleButtonGroup
          size="small"
          style={{
            backgroundColor: "#EEF0F2",
            padding: "5px",
            borderRadius: "1.3vw",
            borderColor: "#000000",
            fontSize: "x-small",
            marginTop: "1vw",
          }}
          exclusive
          value={category}
        >
          <ToggleButton
            style={{
              backgroundColor: category === "authority" ? "#478e93" : "#EEF0F2",
              textTransform: "capitalize",
              color: category === "authority" ? "#FFFFFF" : "#000000",
              borderRadius: "1.3vw",
              borderColor: category === "govt" ? "#478e93" : "#EEF0F2",
              fontSize: "x-small",
            }}
            value="authority"
            onClick={() => setcategory("authority")}
          >
            Government Authority
          </ToggleButton>
          <ToggleButton
            style={{
              backgroundColor: category === "developer" ? "#478e93" : "#EEF0F2",
              color: category === "developer" ? "#FFFFFF" : "#000000",
              textTransform: "capitalize",
              borderRadius: "1.3vw",
              borderColor: category === "developer" ? "#478e93" : "#EEF0F2",
              fontSize: "x-small",
            }}
            value="developer"
            onClick={() => setcategory("developer")}
          >
            Developer
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="textfield text-sm">
          <TextField
            id="email"
            label="Enter Email Id"
            type="email"
            value={email}
            onChange={(e) => {
              setstatus(200);
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
        <div className="textfield text-sm">
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setstatus(200);
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
        {status !== 200 && (
          <>
            <div className="mt-2" style={{ width: "95%" }}>
              <Alert color="danger">{error}</Alert>
            </div>
          </>
        )}
        <Button
          className="button-sm"
          variant="contained"
          style={{
            borderRadius: "1.3vw",
            borderColor: "black",
            backgroundColor: "#197278",
            color: "#FFFFFF",
            margin: "2vw",
            marginBottom: "1vw",
            marginLeft: "5vw",
            fontSize: "small",
          }}
          onClick={sendData}
        >
          Login
        </Button>
        <div
          className="button-sm"
          style={{
            textTransform: "capitalize",
            color: "black",
            fontSize: "12px",
            marginLeft: "4vw",
            marginBottom: "0.5vw",
          }}
        >
          Forgot Password?
        </div>
      </div>
      <div classname="row-login" className="lottie-sm">
        <Lottie options={defaultOptions} height={"20vw"} width={"25vw"} />
      </div>
    </div>
  );
}

export default Login;
