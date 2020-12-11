import styled from 'styled-components'

export const Container = styled.div `
    min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2 );
  background: #eeeeee;
  color: #eeeeee;
`

export const Wrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;


`
export const Card = styled.div `
  margin:0 2rem;
  line-height: 2;
  width: 300px;
  background: #222831;

  @media screen and (max-width: 650px) {
    margin-top:1rem;
  }
`

export const MenuImg = styled.img `
  height: 300px;
  min-width: 300px;
  max-width: 100%;
`

export const TestiMonialImg = styled.img `
  height: 500px;
  min-width: 300px;
  max-width: 100%;

`

export const Heading = styled.h1 `
  font-size: clamp(2 rem, 2.5vw, 3rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 5rem;
  color: #222831;
  letter-spacing: 10px;
  text-transform: uppercase;
`

export const MenuTitle = styled.h2 `
  font-weight: 600;
  font-size: 1.5rem;
`

export const MenuInfo = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`

export const MenuDesc = styled.p `
  font-weight: 300;
  margin-bottom: 1rem;
  white-space: pre-line;
`
export const MenuPrice = styled.p `
  margin-bottom: 1rem;
  font-size: 2rem;
`

export const MenuButton = styled.button `
  font-size: 1rem;
  padding: 1rem 4rem;
  border:none;
  background: #ff0021;
  color: #eeeeee;
  transition: 0.2 ease-out;

  &:hover {
    background: #eeeeee;
    color: #ff0021;
    transition: 0.2s ease-out;
  }
`
