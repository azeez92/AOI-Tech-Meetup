import React from 'react'
import { Container, Row } from 'react-bootstrap'
import azeez from "../assets/speakers/azeez.jpeg"
import modesta from "../assets/speakers/modesta.jpeg"
import ganiyu from "../assets/speakers/ganiyu.jpeg"
import gbadamosi from "../assets/speakers/gbadamosi.jpeg"
import amina from "../assets/speakers/aminat.jpeg"

const speakers =[
{
id: 1,
name: "Azeez Sodiq",
Role: "Full stact Software Developer",
image: azeez
},
{
id: 1,
name: "Modesta Uzo",
Role: "Data and Business Analyst",
image: modesta
},
{
id: 1,
name: "AbdulGaniyu Olanrewaju",
Role: "Mobile Developer and Frontend Web Developer",
image: ganiyu
},

{
id: 1,
name: "Aminat Ajao",
Role: "Cyber Security Analyst",
image: amina
},
{
id: 1,
name: "Gbadamosi Oluwadamilola",
role: "Cybersecurity Specialist",
image: gbadamosi
},

]




const Speakers = () => {
  return (
    <Container>
<div>
  <h2>Featured Speakers</h2>
  <p>Learn From experienced Professionals shaping the tech industry</p>
</div>


<Row>
  {speakers.map((speaker) =>(
    <div key={speaker.id} className='col-12 col-md-6 col-lg-4'>
      <div>
        <img src={speaker.image} alt="" />
        <div>
        <h5>{speaker.name}</h5>
        <p>{speaker.role}</p>

        </div>



      </div>
    </div>
  ))

  }
</Row>


    </Container>
  )
}

export default Speakers

