

import React from 'react'
import mark from '../../assets/icons/mark.svg'
import './Main.css'

const Main = () => {
  return (
    <div className="main">
        <div className="main_container container">
        <div className="main__quote">
            <img src={mark} alt='quote' />
        </div>
        <div className="main__text">
            Torquatos nostros? quos dolores eos, qui studiose antiqua persequeris, claris et quasi naturalem. In quo enim inter mediocrem animadversionem atque insitam in malis dolor, non numquam. 
            At vero eos et dolore suo sanciret.
        </div>
        <div className="main__author">
            John Doe, Street Artist
        </div>
        </div>
    </div>
  )
}

export default Main