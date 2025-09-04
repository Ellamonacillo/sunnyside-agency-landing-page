import React, { useContext } from 'react'
import { MobileContext } from '../context/MobileProvider'
import { desktopImages, mobileImages } from '../assets/images/index.js'

const Services = () => {

  const { isMobile } = useContext(MobileContext);

  const services = [
    { 
      name: 'transform', 
      src: isMobile ? mobileImages.transform : desktopImages.transform,
      title: 'Transform your brand',
      description: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.', 
      showLearnMore: true
    },
    { 
      name: 'standOut', 
      src: isMobile ? mobileImages.standOut : desktopImages.standOut,
      title: 'Stand out to the right audience',
      description: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.', 
      showLearnMore: true
    },
    { 
      name: 'graphic', 
      src: isMobile ? mobileImages.graphicDesign : desktopImages.graphicDesign,
      title: 'Graphic Design',
      description: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.', 
      showLearnMore: false
    },
    { 
      name: 'photography', 
      src: isMobile ? mobileImages.photography : desktopImages.photography,
      title: 'Photography',
      description: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
      showLearnMore: false
    }
  ]

  const renderServices = (service) => {
    return (
      <div className='service-wrapper'>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        {service.showLearnMore && (
          <div className="learn-more group">
            <a href="#" aria-label={`Learn more about ${service.title}`}>
              Learn more
            </a>
            <div className={`line ${service.name === 'transform' ? 'bg-yellow-600 group-hover:bg-yellow-500' : 'bg-red-400 group-hover:bg-red-500'}`} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="service-container">
      {services.slice(0, 2).map((service, index) => (
        <article
          key={service.name}
          className={`normal-container ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <img src={service.src} alt={service.name} />
          {renderServices(service)}
        </article>
      ))}

      <div className="background-container">
        {services.slice(2).map(service => (
          <div
            key={service.name}
            className='background-wrapper' 
            style={{ backgroundImage: `url(${service.src})` }}
            aria-label={service.title}
          >
            <img
              src={service.src}
              alt={service.name}
              className="w-full h-full block"
              aria-hidden="true"
            />
            <article
              className={`background-image-container ${
                service.name === 'graphic' ? 'text-green-800' : 'text-blue-800'
              }`}
            >
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services