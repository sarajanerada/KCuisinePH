import React, { useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'
import {Button} from '../ButtonElement'
import { 
  HeroContainer , 
  HeroItems,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const HeroSection = () => {

  const [hover , setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const btnClick = () => {
    window.open("https://www.google.com", '_blank');
  }

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroItems>
        <HeroH1>SATISFY YOUR KOREAN CRAVINGS</HeroH1>
        <HeroP>The authenticity of the taste is our concern in giving you the taste of korea. </HeroP>
        <Button component={Link} to='//www.google.com/' onClick={btnClick} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' fontBig='true'>
            Pre-Order {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
