import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Home/Hero/Hero'
import CourseList from './components/NavBar/CourseList'
import HomeDown from './components/HomeDown/HomeDown'
import CourseView from './components/Home/CourseView/CourseView'
import HomeSection3 from './components/Home/HomeSection3/HomeSection3'
import HomeSection4 from './components/Home/HomeSection4/HmoeSection4'
import HomeSection5 from './components/Home/HomeSection5/HomeSection5'
import BecomeAnInstructor from './components/Home/HomeSection6/BecomeAnInstructor'
import SuccessStory from './components/Home/HomeSection7/SuccessStory'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden box-border relative z-10 bg-blue-bg'>
      <NavBar/>
      <Hero/>
      <HomeDown/>
      <CourseView/>
      <HomeSection3/>
      <HomeSection4/>
      <HomeSection5/>
      <BecomeAnInstructor/>
      <SuccessStory/>
      <Footer/>
    </div>
  )
}

export default App
