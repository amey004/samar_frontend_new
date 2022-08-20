import React,{useState,useContext,useEffect} from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
  NavbarBrand,
  Alert
} from "reactstrap";
import { NavLink} from "react-router-dom";
import logo from "./images/samar_logo.png";
import AuthContext from './context/AuthContext';
import axios from 'axios';


function NavBar (){
  const[isNavOpen,setisNavOpen] = useState(false);
  const {loggedIn,getLoggedIn} = useContext(AuthContext);
  const toggleNav = () => {
      setisNavOpen(!isNavOpen)
  }
  const logout = async () => {
    console.log("logging out");
    await axios.get("http://localhost:5000/user/logout");
    await getLoggedIn();
  }

    return (
      <div style={{ display: "flex" }}>
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
              >
                Slum Administration, Management and Rehabilitation
              </p>
            </div>
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav classname="container-fluid justify-content-end" navbar>
              <NavItem>
                <NavLink
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
              <NavItem style={{ width: "8.4vw" }}>
                <NavLink
                  className="nav-link"
                  exact
                  to="/faq"
                  activeStyle={{
                    color: "black",
                  }}
                >
                  <h5>FAQ & Policies</h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  exact
                  to="/report"
                  activeStyle={{
                    color: "black",
                  }}
                >
                  <h5>Report/Suggest</h5>
                </NavLink>
              </NavItem>
              {loggedIn ? (
                <NavItem>
                  <NavLink
                    to="/login"
                    className="nav-link"
                    NavLink
                    onClick={() => {
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