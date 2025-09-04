import React, { useContext} from 'react'
import { MobileContext } from '../context/MobileProvider'
import { mobileGallery, desktopGallery } from '../assets/images/index.js'

const Images = () => {

  const { isMobile } = useContext(MobileContext);

  const images = [
    { 
      name: 'Milk Bottle',
      src: isMobile ? mobileGallery.milkBottle : desktopGallery.milkBottle
    },
    { 
      name: 'Orange',
      src: isMobile ? mobileGallery.orange : desktopGallery.orange
    },
    { 
      name: 'Cone',
      src: isMobile ? mobileGallery.cone : desktopGallery.cone
    },
    { 
      name: 'Sugar Cubes',
      src: isMobile ? mobileGallery.sugarCubes : desktopGallery.sugarCubes
    }
  ]

  return (
    <div className='gallery'>
      {images.map(image => (
        <img key={image.name} src={image.src} alt={image.name} />
      ))}
    </div>
  )
}

export default Images