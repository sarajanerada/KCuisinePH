import React from 'react'
import { SidebarContainer , Icon , CloseIcon , SidebarWrapper , SidebarMenu , SidebarLink}  from './SidebarElements'

const Sidebar = ({isOpen , toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='home' onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to='menu'  
               smooth={true} 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active" 
               onClick={toggle}>
              Menu
            </SidebarLink>
            <SidebarLink to='promo' 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active" 
               onClick={toggle}>
              Promo
            </SidebarLink>
            <SidebarLink to='gallery'
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active"  
               onClick={toggle}>
              Gallery
            </SidebarLink>
            <SidebarLink to='howToOrder'
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active" 
               onClick={toggle}>
              How to Order
            </SidebarLink>
            <SidebarLink to='delivery' 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active" 
               onClick={toggle}>
              Delivery
            </SidebarLink>
            <SidebarLink to='testimonials' 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               activeClass="active"
              onClick={toggle}>
              Testimonials
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;
