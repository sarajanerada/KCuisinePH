import React from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';


const ModalBackground = styled.div `  
position: fixed;
top: 25%;
left: 25%;
transform: translate (-50% , -50%);
background-color: #FFF;
border-radius: 15px;
overflow: hidden;
z-index: 1000;

@media screen and (max-width: 1100px) {
    left:10%;
  }

@media screen and (max-width: 900px) {
    left:5%;
  }

@media screen and (max-width: 480px) {
  top: 5%;
  left:13%;
}

`

const ModalWrapper = styled.div `   
width: 800px;
height: 500px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #eeeeee;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;

@media screen and (max-width: 768px) {
  width: 550px;
  height: 400px;
}

@media screen and (max-width: 480px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
  height: 650px;
}

`

 const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 1000;  
  `



 const ModalImg = styled.img ` 
 width: 100%;
height: 100%;
background: #000;
object-fit: cover;

@media screen and (max-width: 480px) {
  height: 250px;
  min-width: 300px;
  max-width: 100%;
}
`


 const ModalContent = styled.div `
  display:  flex ;
  flex-direction:  column;
  justify-content:  center ;
  align-items:  center;
  line-height:  1.8 ;
  color: #222831 ;



  h1 {
    font-size:  3rem ;
    text-align:  center ;
    letter-spacing:  2px;
    line-height:  1.3 ;

    @media screen and (max-width: 768px) {
    font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.2rem;
}  
  }

  p {
    margin-bottom:  1rem ;
    font-size:  12px ;
    margin:  1rem 1rem ;
    
    @media screen and (max-width: 480px) {
      margin:  1rem 1rem ;
      margin-bottom: 10px;
      font-size: 10px;
  }

  }

  button {
    padding:  10px 24px ;
  background:  #222831 ;
  color:  #eeeeee ;
  border:  none ;

  @media screen and (max-width: 480px) {
    padding:  10px 24px;
  }
  }
  
  `



const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  @media screen and (max-width: 480px) {
  top:12px;
  right: 10px;
  width: 15px;
  height: 15px;
  color: #eeeeee;
  }
`;

const Modal = ({open, children, onClose , data}) => {

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: open ? 1 : 0,
    transform: open ? `translate (-25%, -25%)`: `translate (-50%, -50%)`
  })
  
  if (!open) return null

  
  return ReactDOM.createPortal (
    <>
    <OverlayStyles onClick={onClose} />
    <animated.div style={animation}>
    <ModalBackground>
      <ModalWrapper>
      <ModalImg src={data.img} alt={data.alt} />
       <ModalContent>
         <h1>{data.modalHeading}</h1>
         <p>{data.modalDescription}</p>
         <button >Order Now</button>
       </ModalContent> 
       <CloseModalButton
                aria-label='Close modal'
                onClick={onClose}/>
        {children}
      </ModalWrapper>
      
    </ModalBackground>
    </animated.div>
    </>,
    document.getElementById('portal')
    )
}

export default Modal
