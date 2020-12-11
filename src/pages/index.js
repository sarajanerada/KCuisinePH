import React, {useState} from 'react'
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { freeDelivery, homeObjOne, howToOrder } from '../components/InfoSection/Data';
import Menu from '../components/MenuSection';
import { menuData } from '../components/MenuSection/data';
import { partySizes } from '../components/MenuSection/PartySizes';
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Testimonial from '../components/Testimonials';
import { imgStart, testiMonialData } from '../components/Testimonials/Item';
import { GlobalStyle } from '../globalStyles';


const Home = () => {
  const [isOpen , setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }



  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Menu heading="Our Amazing Product" data={menuData} id={Menu}/>
      <InfoSection {...homeObjOne} />
      <Menu heading="Party Sizes" data={partySizes}/>
      <InfoSection {...howToOrder} />
      <Gallery heading="Gallery"></Gallery>
      <InfoSection {...freeDelivery} />
      <Testimonial heading="Check what our Customer Says about us" data={testiMonialData} imgStart={imgStart}></Testimonial>
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default Home

