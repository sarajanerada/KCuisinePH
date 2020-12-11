import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat' , sans-serif;
  ${'' /* overflow-x: hidden; */}
}

.rec-carousel-item:focus {
  outline: none;
  box-shadow: inset 0 0 1px 0px red;
}


` 
