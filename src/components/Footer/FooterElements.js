import styled from 'styled-components'
import { BrowserRouter as link } from 'react-router-dom'

export const FooterContainer = styled.div `
  background-color : #222831;
`

export const FooterWrapper = styled.div `
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;

`

export const SocialMedia = styled.section `
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(link) `
  color: #eeeeee;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
     text-align: center;
  }
`

export const WebsiteRights = styled.small `
  color: #eeeeee;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div `
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

`

export const SocialIconLink = styled.a`
color: #eeeeee;
font-size: 3rem;

`

