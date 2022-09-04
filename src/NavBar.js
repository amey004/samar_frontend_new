import React,{useState,useContext,useEffect} from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
  NavbarBrand,
} from "reactstrap";
import { NavLink} from "react-router-dom";
import logo from "./images/samar_logo.png";
import AuthContext from './context/AuthContext';
import axios from 'axios';
import "./index.css"

function NavBar (){
  const[isNavOpen,setisNavOpen] = useState(false);
  const[url,seturl] = useState("/");
  const {loggedIn,getLoggedIn,role} = useContext(AuthContext);
  const toggleNav = () => {
      setisNavOpen(!isNavOpen)
  }
  const logout = async () => {
    console.log("logging out");
    await axios.get("http://localhost:5000/user/logout");
    await getLoggedIn();
  }
  useEffect(()=>{
    if(role==='developer'){
      seturl("/dev-dashboard")
    }else if(role==='authority'){
      seturl("/govt-dashboard")
    }
  },[url,role])
    return (
      <div style={{ display: "flex" }} className="navbar">
        <Navbar expand="md" style={{ width: "100%" }} fixed="top">
          <NavbarToggler className="mr-2" onClick={toggleNav} />
          <NavbarBrand className="" href="/" style={{ width: "100%" }}>
            <div style={{ display: "inline" }}>
              <img
                src={logo}
                alt=""
                style={{
                  height: "8vh",
                  display: "inline-block",
                }}
              />
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "1vw",
                  fontSize: "20px",
                }}
                className="navbar-heading1"
              >
                Slum Administration, Management and Rehabilitation
              </p>
              <p
                style={{
                  marginLeft: "1vw",
                  fontSize: "18px",
                }}
                className="navbar-heading2"
              >
                Slum Administration, Management
                <br />
                and Rehabilitation
              </p>
            </div>
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav classname="container-fluid justify-content-end" navbar>
              <NavItem>
                <NavLink
                  onClick={toggleNav}
                  className="nav-link"
                  exact
                  to="/"
                  activeStyle={{
                    color: "black",
                  }}
                >
                  <h5>Home</h5>
                </NavLink>
              </NavItem>
              {loggedIn && (
                <NavItem>
                  <NavLink
                    onClick={toggleNav}
                    className="nav-link"
                    exact
                    to={url}
                    activeStyle={{
                      color: "black",
                    }}
                  >
                    <h5>Dashboard</h5>
                  </NavLink>
                </NavItem>
              )}
              <NavItem style={{ width: "13vw" }}>
                <NavLink
                  onClick={toggleNav}
                  className="nav-link"
                  exact
                  to="/report"
                  activeStyle={{
                    color: "black",
                  }}
                >
                  <h5>Grievance Redressal</h5>
                </NavLink>
              </NavItem>
              {loggedIn ? (
                <NavItem>
                  <NavLink
                    to="/login"
                    className="nav-link"
                    NavLink
                    onClick={() => {
                      toggleNav();
                      console.log("clicked!");
                      logout();
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <h5>Logout</h5>
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink
                    onClick={toggleNav}
                    className="nav-link"
                    exact
                    to="/login"
                    style={{ textDecoration: "none" }}
                  >
                    <h5>Login</h5>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default NavBar;