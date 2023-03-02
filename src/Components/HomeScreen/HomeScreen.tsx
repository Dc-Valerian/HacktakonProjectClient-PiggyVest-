import React from 'react'
import Build from '../Home/Build/Build'
import CardProps from '../Home/Build/CardProps'
import Customers from '../Home/Customers/Customers'
import Footer from '../Home/Footer/Footer'
import Header from '../Home/Header/Header'
import Hero from '../Home/Hero/Hero'
import Investment from '../Home/Investment/Investment'
import Meet from '../Home/Meet/Meet'
import Priority from '../Home/Priority/Priority'

const HomeScreen = () => {
  return (
    <div>
      <Header/>
        <Hero/>
        <Priority/>
        <Build/>
        <Investment/>
        <Meet/>
        <Customers/>
        <Footer/>
    </div>
  )
}

export default HomeScreen