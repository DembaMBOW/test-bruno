import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, LogoImage} from './NavbarElements';
import {DarkButton} from '../HeroSection/HeroElements';


const Navbar = ({ toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'><LogoImage src={require('../../images/logo-numeral.png')}/></NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="platform">Platform</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="coverage">Coverage</NavLinks>
                  </NavItem>  
                  <NavItem>
                    <NavLinks to="usercases">User Cases</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="apidocs">Api Docs</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="blog">Blog</NavLinks>
                  </NavItem>
                </NavMenu>

            </NavbarContainer>
            <DarkButton>Talk to an expert →</DarkButton>

        </Nav>
    </>
  );
};

export default Navbar;
