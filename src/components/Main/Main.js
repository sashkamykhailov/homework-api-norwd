

import React, {useContext} from 'react'
import mark from '../../assets/icons/mark.svg'
import { AppContext } from '../../context/AppContext'
import './Main.css'

const Main = () => {

  const {informationAbout} = useContext(AppContext)

  return (
    <div className="main">
      {informationAbout 
      ?
      <div className="main_container container">
        <div className="main__quote">
            <img src={mark} alt='quote' />
        </div>
        <div className="main__text">
          {informationAbout && informationAbout[1].text}
        </div>
        <div className="main__author">
          {informationAbout && informationAbout[1].author}
        </div>
        </div>
        :
        <div>Loading...</div>}
        
    </div>
  )
}

export default Main