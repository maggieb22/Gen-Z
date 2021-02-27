import React, { useState } from 'react';
import logo from './gen-z-logo.png';
import "./nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Modules from "./Modules";
import About from "./About";
import OurProgram from "./OurProgram";
import FAQ from "./FAQ";
import JoinUs from "./JoinUs";
import Donate from "./Donate";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="FFFFFF" light expand="md">
          <NavbarBrand><a href="/index"><img className = "photo" src={logo} roundedCircle /></a></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <NavLink href="/modules/">Modules</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/about/">About Us</NavLink>
              </NavItem >
              <NavItem className="navItem">
                <NavLink href="/our-program/">Our Program</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/faq">FAQ</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/join-us/">Join Us</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/donate/">Donate</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar> 
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>*/}
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          <Route path="/modules/">
            <Modules />
          </Route>
          <Route path="/about/">
            <About />
          </Route>
          <Route path="/our-program/">
            <OurProgram />
          </Route>
          <Route path="/faq/">
            <FAQ />
          </Route>
          <Route path="/join-us/">
            <JoinUs />
          </Route>
          <Route path="/donate/">
            <Donate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function About() {
//   return <h2>About</h2>;
// }

// function OurProgram() {
//   return <h2>Our Program</h2>;
// }

// function FAQ() {
//   return <h2>FAQ</h2>;
// }

// function JoinUs() {
//   return <h2>Join Us</h2>;
// }

// function Donate() {
//   return <h2>Donate</h2>;
// }

export default Example;