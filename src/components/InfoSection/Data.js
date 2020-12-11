import promo from '../../images/promo.png'
import order from '../../images/svg-4.svg'
import delivery from '../../images/svg-6.svg'


export const homeObjOne = {
  id: 'promo',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: 'Promo',
  shadow: true,
  description: 'Buy 3 Japchae and Get 1 Free Honey Garlic Chicken.',
  buttonLabel: 'Pre Order',
  imgStart: true,
  imgURL: promo,
  alt: 'Japchae',
  dark: true,
  primary: true,
  darkText: false,
  fontBig: false
  
};

export const howToOrder = {
  id: 'howToOrder',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: 'How To Order',
  shadow: false,
  description: `Order Now via Facebook Messenger `,
  buttonLabel: 'Message us',
  imgStart:false,
  imgURL: order,
  alt: 'Japchae',
  dark: true,
  primary: true,
  darkText: false,
  fontBig: false
  
};

export const freeDelivery = {
  id: 'delivery',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: 'Free Delivery',
  shadow: false,
  description: `Stay at Home. We will deliver to your door.`,
  buttonLabel: 'Message us',
  imgStart:true,
  imgURL: delivery,
  alt: 'Japchae',
  dark: true,
  primary: true,
  darkText: false,
  fontBig: false
  
};