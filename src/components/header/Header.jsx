import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials  from './HeaderSocials'
import ME from '../../assets/descargar (2).jpg'

const Header = () => {
  return (
    <header>
       <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Claudio Aniñir</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="my image"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down </a>

       </div>
    </header>
  )
}

export default Header