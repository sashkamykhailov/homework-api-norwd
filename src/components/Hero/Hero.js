
import React from 'react'
import my from '../../assets/images/my.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero__container container">
            <div className="hero__title">
                <h1>
                    In oculis quidem rerum facilis est et aperta
                </h1>
            </div>
            <div className="hero__image">
                <img src={my} alt="hero-img"/>
            </div>
        </div>
    </div>
  )
}

export default Hero