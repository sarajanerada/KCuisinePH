import React, {useState} from 'react';
import {
  Container,
  Heading,
  Wrapper,
  Card,
  MenuImg,
  MenuTitle,
  MenuDesc,
  MenuPrice,
  MenuButton,
  MenuInfo,
} from './MenuElement'

import Carousel from 'react-elastic-carousel';
import './styles.css'
import Modal from './Modal'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 10 }
];


const Menu = ({heading , data}) => {

  const [isOpen , setIsOpen] = useState(false);
  const [modalData , setModalData] = useState({});



  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Container id="menu">
      <Heading>{heading}</Heading>
     
      <Wrapper>
      <Carousel breakPoints={breakPoints}>
        {data.map((menu, index) => {
          return (
            <Card key={index}>
              <MenuImg src={menu.img} alt={menu.alt} />
              <MenuInfo>
                <MenuTitle>{menu.name}</MenuTitle>
                <MenuDesc>{menu.desc}</MenuDesc>
                <MenuPrice>{menu.price}</MenuPrice>
                <MenuButton onClick={() => {setIsOpen(true) ; setModalData(menu)}}>{menu.button}</MenuButton>
                <Modal open={isOpen} onClose={closeModal} data={modalData}/>
              </MenuInfo>
            </Card>
          )
        })}
        </Carousel>

      </Wrapper>
      
    </Container>
  )
}

export default Menu;

