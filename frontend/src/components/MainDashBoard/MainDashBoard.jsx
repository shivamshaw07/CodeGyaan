import React from 'react'
import NavBar from '../NavBar/NavBar'
import Sidebar from './Sidebar'

const MainDashBoard = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <NavBar/>
        <div className='flex '>
        <Sidebar/>
        
        </div>
    </div>
  )
}

export default MainDashBoard