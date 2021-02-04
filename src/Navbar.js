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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="FFFFFF" light expand="md">
        <NavbarBrand><img className = "photo" src={logo} roundedCircle /></NavbarBrand>
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
    </div>
  );
}

export default Example;