import styled from 'styled-components'

export const TestimonialContainer = styled.div `
  color: #222831;
  background: #eeeeee ;
  padding: 5rem calc((100vw - 1300px) / 2 );
 
  @media screen and (max-width: 768px) {
    padding: 100px 0;

  }
`

export const TestimonialWrapper = styled.div `
display: grid;
z-index: 1;
height: 700px;
width: 100%;
max-width: 1200px;
margin-right: auto;
margin-left: auto;
padding: 0 10px;
justify-content: center;
@media screen and (max-width: 768px) {
  height: 1000px;

  }
`

export const TestimonialRow = styled.div `
display: grid;
grid-auto-columns: minmax(auto , 1fr);
align-items: center ;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
  grid-template-areas:  ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}

`

export const Column1 = styled.div `
margin-bottom: 15px;
grid-area: col1;

`

export const Column2 = styled.div `
margin-bottom: 15px;
grid-area: col2;

`

export const TextWrapper = styled.div `
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const ImgWrap = styled.div `
  max-width: 555px;
  height: 100%;
`
export const Img = styled.img `
  width: 100%;
  margin: 0 0 10px 50px;
  padding-right: 0;

`