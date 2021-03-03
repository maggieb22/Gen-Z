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

function OurProgram() {
    return (
        <div>
            <h2>Our Program.</h2>
        </div>
    )
}

export default OurProgram;