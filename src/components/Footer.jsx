import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return (
    <Container fluid className='bg-black text-white pt-5'>
     <Row className='py-3 border-bottom border-white mx-5'>
        <Col><h4>Atibyan Tech Meetup</h4>
<p>A monthly tech gathering powered by Atibyan Tech Academy, focused on helping students and aspiring professionals grow beyond technical skills through real-world insights and the Tech Elevation experience.</p>

<h5>Tagline:</h5>
<p>Connect. Learn. Elevate.</p></Col>
        <Col className='list-unstyled'><h4> Quick Links</h4>
<li>Home</li>
<li>About the Meetup</li>
<li>Speakers</li>
<li>Gallery</li>
<li>Testimonials</li>
<li>Register</li>
<li>Contact</li>
  </Col>
        <Col><h4>Contact & Info</h4>

<p>
  <strong>Location:</strong>
  Atibyan Tech Academy, Lagos, Nigeria
</p>

<p>
  <strong>Schedule:</strong>
  Every Last Saturday of the Month
</p>
<p>
  
  <strong>Email:</strong>
  info@atibyan.com
  
</p>
<strong>Phone:</strong>
+234 XXX XXX XXXX
</Col>
      </Row>
     
      <Row className="mx-5 mt-3 pb-3">
        <Col>© 2026 Atibyan Tech Academy. All rights reserved.</Col>
        <Col>Designed for growth, learning, and real-world tech exposure.</Col>
      </Row>
      
    </Container>
  )
}

export default Footer
