import React from 'react'
import './about.css'
import ME from '../../assets/descargar (3).jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About