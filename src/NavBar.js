import React,{Component} from 'react';
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
import {Container} from "@material-ui/core"


class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Navbar expand="md" style={{ width: "100%" }}>
          <NavbarToggler className="mr-2" onClick={this.toggleNav} />
          <NavbarBrand className="" href="/" style={{ width:"100%" }}>
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
                  fontSize: "15px",
                }}
              >
                Slum Administration, Management and Rehabilitation
              </p>
            </div>
          </NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
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
              <NavItem style={{width:"10vw"}}>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;