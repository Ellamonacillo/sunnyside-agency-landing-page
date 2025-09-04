import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import { MobileContext } from '../context/MobileProvider'
import { mobileImages,  desktopImages } from '../assets/images'

const Header = () => {

  const { isMobile } = useContext(MobileContext);
  const bgImage = isMobile ? mobileImages.header : desktopImages.header;

  return (
    <header style={{ backgroundImage: `url(${bgImage})` }}>
        <Nav />
        <Hero />
    </header>
  )
}

export default Header