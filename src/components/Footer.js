import React, { useState } from 'react';
import facebook from '../photos/facebook.png'
import twitter from '../photos/twitter.svg'
import instagram from '../photos/instagram.svg'
import linkedin from '../photos/linkedin.png'
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

const MyFooter = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <Navbar color="FFFFFF" light expand="md" style={{backgroundColor: 'white'}}>
          <div>
            <row>
              <NavbarBrand><a href="/"><img className="fb" alt="fb" src={facebook} /></a></NavbarBrand>
              <NavbarBrand><a href="/"><img className="tw" alt="tw" src={twitter} /></a></NavbarBrand>
              <NavbarBrand><a href="/"><img className="ig" alt="ig" src={instagram} /></a></NavbarBrand>
              <NavbarBrand><a href="/"><img className="in" alt="in" src={linkedin} /></a></NavbarBrand>
            </row>
            <row>
              <div class="copyright">&#169; 2021 The Gen-Z Project</div>
            </row>            
          </div>
          
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
      </div>
  );
}

export default MyFooter;