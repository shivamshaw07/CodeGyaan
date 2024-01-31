import React from 'react'
import NavBar from '../NavBar/NavBar'
import Sidebar from './Sidebar'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'

const MainDashBoard = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <NavBar/>
        <div className='flex '>
        <Sidebar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default MainDashBoard