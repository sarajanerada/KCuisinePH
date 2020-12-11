import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import image1 from '../../images/image1.jpeg'
import image2 from '../../images/image2.jpeg'


import { Wrapper , Container, Heading } from '../MenuSection/MenuElement'

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image1,
    thumbnail: image1,
  },
];

const Gallery = ({heading}) => {
  return (
    <Container id="gallery">
        <Heading>{heading}</Heading>
        <Wrapper>
        <ImageGallery items={images} />
        </Wrapper>
    </Container>
  )
}

export default Gallery
