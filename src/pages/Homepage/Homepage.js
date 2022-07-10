
import React from 'react'
import Hero from '../../components/Hero/Hero'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'
import SubmitForm from '../../components/SubmitForm/SubmitForm'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Main />
      <SubmitForm />
    </div>
  )
}

export default Homepage