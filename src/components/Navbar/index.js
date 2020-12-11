import React from 'react';
// import * as Scroll from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.svg'
import { Nav , NavbarContainer , NavLogo , MobileIcon, NavMenu , NavItem , NavLinks } from './NavbarElements';

const toggleHome = ()  => {
  scroll.scrollToTop();
}
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <img src={Logo} alt="logo"/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home"   smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="menu" 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80} >
                Menu
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="promo"   
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >
                Promo
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              activeClass="active" >
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="howToOrder" 
               smooth={true} 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active">
              How to Order
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="delivery"
              smooth={true} 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active" >
              Delivery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="testimonials" 
              smooth={true} 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active">
              Testimonials
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>

    </>
  )
}

export default Navbar;