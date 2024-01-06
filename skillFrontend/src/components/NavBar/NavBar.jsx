import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import CourseList from './CourseList';

const NavBar = () => {
  return (
    <div className='h-auto w-[100vw] overflow-x-hidden py-4 flex flex-col gap-4 shadow-md shadow-black'>
        <div className='flex justify-between items-center w-[85%] mx-auto'>
            <h1 className='text-3xl font-bold text-[#cbab61]'>Skill safari</h1>
            <div className='w-[50%] flex justify-center items-center  border-black bg-[#2c2d30] text-white rounded-xl'>
                <IoSearch className='px-3 text-[2.6rem] bg-[#cbab61] rounded-l-xl'/>
                <input type="text" className='w-full allunset h-full border-none rounded-lg px-4' placeholder='Search by product title'/>
            </div>
            <div className='flex bg-[#cbab61] px-5 py-2 rounded-md hover:scale-95 transition-all text-white duration-200'>
                <div className='text-base hover:cursor-pointer font-medium'>Login /</div>
                <div className='text-base hover:cursor-pointer font-medium'>&nbsp;Signin</div>
            </div>
        </div>
        <div className='flex justify-between items-center text-white font-normal text-base w-[85%] mx-auto'>
          <div className='flex justify-center items-center group cursor-pointer'><span>Courses</span><CourseList/> <FaAngleDown/> </div>
          <div className='flex justify-center items-center'>Home</div>
          <div className='flex justify-center items-center'>Job Portal</div>
          <div className='flex justify-center items-center'>Contact Us</div>
          <div className='flex justify-center items-center'>About Us</div>
        </div>
    </div>
  )
}

export default NavBar