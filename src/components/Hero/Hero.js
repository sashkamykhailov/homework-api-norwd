
import React, {useContext} from 'react'
import { AppContext } from '../../context/AppContext'
import './Hero.css'

const Hero = () => {

  const {informationAbout} = useContext(AppContext)

  return (
    <div className="hero">
        {informationAbout 
        ? 
        <div className="hero__container container">
            <div className="hero__title">
                <h1>
                    {informationAbout && informationAbout[0].text}
                </h1>
            </div>
            <div className="hero__image">
                <img src={informationAbout && informationAbout[0].img} alt="hero-img"/>
            </div>
        </div>
        :
        <div>Loading...</div>
        }
    </div>
  )
}

export default Hero