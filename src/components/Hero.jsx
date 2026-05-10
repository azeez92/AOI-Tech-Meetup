import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';


const Hero = () => {
  return (
     <Carousel fade>
      <Carousel.Item>
        <img src={slide1} alt="" />
        <div className='overlay'></div>
        <Carousel.Caption>
          <h3>ELEVATE YOUSELF</h3>
          <p>Empowering the next generation of tech professionals with real-world knowledge, digital 
skills, and industry insights. </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img src={slide2} alt="" />
        <div className='overlay'></div>
        <Carousel.Caption>
          <h3>Beyond the Classroom</h3>
          <p>Gain practical knowledge in branding, career growth, and navigating the tech industry 
from experienced professionals.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img src={slide3} alt="" />
        <div className='overlay'></div>
        <Carousel.Caption>
          <h3>Grow Smarter with Data & Skills </h3>
          <p>
            From business insights to personal development, Tech Elevation equips you with tools 
to thrive in today’s tech-driven world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero
