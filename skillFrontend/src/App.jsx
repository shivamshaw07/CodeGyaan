import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Home/Hero/Hero'
import CourseList from './components/NavBar/CourseList'

function App() {

  return (
    <div className='w-[100vw] min-h-[100vh] overflow-x-hidden box-border relative z-10 bg-[#5f6168]'>
      <NavBar/>
      <Hero/>
      
    </div>
  )
}

export default App
