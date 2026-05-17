import React, { useState } from 'react'
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
role: "Full stact Software Developer",
image: azeez
},
{
id: 2,
name: "Modesta Uzo",
role: "Data and Business Analyst",
image: modesta
},
{
id: 3,
name: "AbdulGaniyu Olagunju",
role: "Mobile Developer and Frontend Web Developer",
image: ganiyu
},

{
id: 4,
name: "Aminat Ajao",
role: "Cyber Security Analyst",
image: amina
},
{
id: 5,
name: "Gbadamosi Oluwadamilola",
role: "Cybersecurity Specialist",
image: gbadamosi
},

]





const Speakers = () => {
const [activeId, setActiveId] = useState(1);



  return (
    <Container>
<div className='speaker-heading'>
  <h2>Featured Speakers</h2>
  <p>Learn From experienced Professionals shaping the tech industry</p>
</div>


<div className="speaker-container">
      {speakers.map((speaker) => {
        const isActive = speaker.id === activeId;

        return (
          <div
            key={speaker.id}
            className={`speaker-card ${isActive ? "active" : ""}`}
            onClick={() => setActiveId(speaker.id)}
          >
            <img src={speaker.image} alt={speaker.name} />

            {/* Overlay */}
            <div className="overlay">
              {isActive && (
                <>
                  <h4>{speaker.name}</h4>
                  <p>{speaker.role}</p>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>

    </Container>
  )
}

export default Speakers

