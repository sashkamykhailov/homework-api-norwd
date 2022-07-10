
import React, { useState } from 'react'
import './SubmitForm.css'

const SubmitForm = () => {

  const [submit, setSubmit] = useState('')
  const [submited, setSubmited] = useState(false)

  const handleClick = () => {
        setSubmited(true)
        setSubmit('') 
        setTimeout(() => {
          setSubmited(false)
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
            {submited ? 
            <div className="submit__message">
                Thank you for signing up for the Breally newsletter.
            </div> 
            :
            null
            }
        </div>
    </div>
  )
}

export default SubmitForm