import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link) ` 
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#ff0021' : '#222831')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#eeeeee' : "#222831")};
  font-size: ${({fontBig}) => (fontBig ? '1.2rem' : '1rem')};
  font-family: "Montserrat"; 
  width: 250px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#eeeeee' : '#ff0021' )};
    color: ${({dark}) => (dark ? '#222831' : "#eeeeee")};

  }

`
