import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import organize from '../assets/atibyan.jpg'

const TheOrganizer = () => {
  return (
      <Container fluid className='pt-5 about bg-black text-white'>
      <Row className='align-items-center mx-5'>
       


        <Col  md={6} sm={12}>

<h1>About Atibyan Tech Academy</h1>

<p>Atibyan Tech Academy is committed to developing skilled, confident, and industry-ready tech professionals through practical training and mentorship.</p>

<p>The academy provides hands-on learning experiences across various areas of technology, ensuring that students gain not only knowledge but also the ability to apply it effectively.</p>

<p>Recognizing the importance of exposure beyond technical training, Atibyan Tech Academy created the Atibyan Tech Meetup as a platform to complement its learning programs.</p>

<p>Through initiatives like Tech Elevation, the academy continues to empower students with the mindset, skills, and real-world understanding needed to thrive in today’s competitive tech landscape.</p>

<button type="button" className="btn btn-outline-warning"><a href="http://" target="_blank" rel="noopener noreferrer">Learn More</a></button>        </Col>

         <Col md={6} sm={12}>
        <img src={organize} alt="" width="100%" /></Col>
      </Row>


      <Row className='sub-about'>
      <Col></Col>
        <Col></Col>
         <Col></Col>
      </Row>
      
    </Container>
  )
}

export default TheOrganizer
