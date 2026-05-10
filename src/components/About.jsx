import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assets/about.jpg'

const About = () => {
  return (
   <Container className='py-5 about'>
      <Row className='align-items-center'>
        <Col md={6} sm={12}>
        <img src={about} alt="" width="100%" /></Col>


        <Col  md={6} sm={12}>

<h1>About Atibyan Tech Meetup</h1>

<p>
  
  Atibyan Tech Meetup is a monthly initiative by Atibyan Tech Academy designed to bring students, aspiring professionals, and tech enthusiasts together for impactful learning and meaningful connections.
</p>
<p>
  
  Unlike traditional classroom sessions, this meetup focuses on the real-world side of tech — the experiences, challenges, strategies, and insights that shape successful careers.
</p>

<p>Each edition of the meetup is built around the concept of Tech Elevation — a mindset and experience focused on helping participants grow beyond their current level by exposing them to new ideas, practical knowledge, and industry perspectives.</p>

<p>Held every last Saturday of the month, the meetup creates an environment where participants can:</p>

<ul>
 <li>Learn from experienced professionals</li>
 <li> Engage in insightful discussions</li>
 <li> Ask questions and gain clarity</li>
 <li>Build valuable connections</li>
</ul>

<p>It is not just an event — it is a platform for continuous growth.</p>

        </Col>
      </Row>


      <Row className='sub-about'>
      <Col></Col>
        <Col></Col>
         <Col></Col>
      </Row>
      
    </Container>
  )
}

export default About
