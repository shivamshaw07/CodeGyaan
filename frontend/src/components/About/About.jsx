import React from 'react'
import HeroSection from './HeroSection'
import NavBar from '../NavBar/NavBar'
import FoundingStory from './FoundingStory'
import Footer from '../Footer/Footer'
import MiddleBanner from './MiddleBanner'

const About = () => {
  return (
    <div className='w-full h-auto'>
        <NavBar/>
        <HeroSection/>
        <FoundingStory/>
        <MiddleBanner/>
        <Footer/>   
    </div>  
  )
}

export default About