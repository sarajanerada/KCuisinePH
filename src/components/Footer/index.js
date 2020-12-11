import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrapper, SocialMedia, SocialMediaWrapper,  SocialIcons, SocialIconLink, SocialLogo, WebsiteRights } from './FooterElements'
import Logo from '../../images/logo.svg'

const Footer = () => {

  return (
    <FooterContainer>
      <FooterWrapper>
          <SocialMedia>
            <SocialMediaWrapper>
              <SocialLogo to='/'>
                <img src={Logo} alt="logo"/>  
              </SocialLogo>
              <WebsiteRights>KCuisine © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrapper>
          </SocialMedia>
      </FooterWrapper>
      
    </FooterContainer>
  )
}

export default Footer
