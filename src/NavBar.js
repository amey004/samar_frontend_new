import React,{Component} from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
  NavbarBrand,
} from "reactstrap";
import { NavLink} from "react-router-dom"

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
      <div>
        <Navbar expand="md">
          <NavbarToggler className="mr-2" onClick={this.toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <h4>
              <strong>SAMAR</strong>
            </h4>
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
                  <h4>Home</h4>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  exact
                  to="/faq"
                  activeStyle={{
                    color: "black",
                  }}
                >
                  <h4>FAQ & Policies</h4>
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
                  <h4>Report/Suggest</h4>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  exact
                  to="/login"
                  style={{ textDecoration: "none" }}
                >
                  <h4>Login</h4>
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