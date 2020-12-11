import styled from 'styled-components';
import HeaderBg from '../../images/header5.png'

import {MdKeyboardArrowRight , MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div `
  background: linear-gradient(to right, rgba(34 , 40 , 49 , 0.8) , rgba(34 , 40 , 49 , 0.1)), url(${HeaderBg}) ;
  height: 100vh;
  background-position: center;
  background-size: cover;

  /* Add :Before Styles */
`;


export const HeroContent = styled.div `
height: 100vh;
max-height: 100%;
/* width: 100vw; */
padding: 0rem calc((100vw - 1300px) / 2)
`
export const HeroItems = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #eeeeee;
  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const HeroH1 = styled.h1 `
color: #eeeeee;
font-family: 'Montserrat Black';
font-size: clamp(2rem, 10vw, 5rem);
margin-bottom: 1rem;
letter-spacing: 10px;

`

export const HeroP = styled.p `
color: #eeeeee;
font-family: 'Montserrat';
font-size: clamp(1.2rem, 2vw, 2rem);
letter-spacing: 2px;
margin-bottom: 2rem;
`


export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled (MdKeyboardArrowRight) `
margin-left: 8px;
font-size: 20px;
`


