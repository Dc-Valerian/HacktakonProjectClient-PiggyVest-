import React from 'react'
import Build from '../Build/Build'
import CardProps from '../Build/CardProps'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Investment from '../Investment/Investment'
import Priority from '../Priority/Priority'

const HomeScreen = () => {
  return (
    <div>
      <Header/>
        <Hero/>
        <Priority/>
        <Build/>
        <Investment/>
        <Footer/>
    </div>
  )
}

export default HomeScreen