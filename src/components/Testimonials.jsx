import { avatars } from '../assets/images/index.js'

const Testimonials = () => {

  const testimonials = [
    {
      name: 'Emily R.',
      position: 'Marketing Director',
      message: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      src: avatars.emily
    },
    {
      name: 'Thomas S.',
      position: 'Chief Operating Officer',
      message: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      src: avatars.thomas
    },
    {
      name: 'Jennie F.',
      position: 'Business Owner',
      message: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      src: avatars.jennie
    }
  ]

  return (
    <div className='testimonial-container'>
        <h2 className='testimonial-title'>
          Client testimonials
        </h2>

        <div className='grid md:grid-cols-3 md:gap-8'>
          {testimonials.map(testimonial => (
            <div key={testimonial.name} className='testimonial-wrapper'>
              <img src={testimonial.src} alt={testimonial.name} />
              <p>{testimonial.message}</p>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.position}</span>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default Testimonials