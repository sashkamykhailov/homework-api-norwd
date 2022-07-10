
import React, { useState } from 'react'
import axios from 'axios'
import './SubmitForm.css'

const SubmitForm = () => {

  const [submit, setSubmit] = useState('')
  const [responseS, setResponseS] = useState('')
  const [messageColor,setMessageColor] = useState(true)

  const handleClick = () => {
        setSubmit('') 
        
        axios.post('https://adchitects-cms.herokuapp.com/newsletter', 
            {
                email: submit, 
            },
            {
                auth: {
                    username: 'adchitects',
                    password: 'jsrulezzz',
                    },
            }
        ).then(res => {
            setMessageColor(true)
            setResponseS(res.data.message)
        }
        ).catch(rej => {
            setMessageColor(false)
            setResponseS('Email is not valid')
        })
       
       setTimeout(() => {
           setResponseS('')
       },1500)
  }

  return (
    <div className="submit">
        <div className="submit__container container">
            <div className="submit__text">
                Sign up for Newsletter
            </div>
            <div className="submit__group">
                <input
                    placeholder='Type your email'
                    className="submit__input"
                    value={submit}
                    onChange={e => setSubmit(e.target.value)}
                />
                <button 
                    disabled={submit.length < 2} 
                    onClick={handleClick} 
                    className="btn">
                    Submit
                </button>
            </div>
            <div className={messageColor ? "submit__message" : "submit__message red"}>
                {responseS}
            </div> 
        </div>
    </div>
  )
}

export default SubmitForm