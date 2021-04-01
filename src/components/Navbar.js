import React, { useState } from 'react';
import logo from '../photos/gen-z-logo.png'
import "./nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import Modules from "../pages/Modules";
import About from "../pages/About";
import OurProgram from "../pages/OurProgram";
import FAQ from "../pages/FAQ";
import JoinUs from "../pages/JoinUs";
import Donate from "../pages/Donate";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="FFFFFF" light expand="md" style={{backgroundColor: 'white'}}>
          <NavbarBrand><a href="/"><img className="photo" alt="logo" src={logo} roundedCircle /></a></NavbarBrand>
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
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Example;