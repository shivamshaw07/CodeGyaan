import React from 'react'
import HeroSection from './HeroSection'
import NavBar from '../NavBar/NavBar'
import FoundingStory from './FoundingStory'
import Footer from '../Footer/Footer'
import MiddleBanner from './MiddleBanner'
import WorldClass from './WorldClass'
import Review from './Review'

const About = () => {
  return (
    <div className='max-w-[100vw] h-auto overflow-x-hidden'>
        <NavBar/>
        <HeroSection/>
        <FoundingStory/>
        <MiddleBanner/>
        <WorldClass/>
        <Review/>
        <Footer/>   
    </div>  
  )
}

export default About