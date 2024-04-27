import React from 'react'
import { BsCart4, BsPlus } from 'react-icons/bs';
import {CgLogOut, CgProfile} from 'react-icons/cg'
import { FaGraduationCap, FaPlus } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MdSettings } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../servies/operations/authOpertaion';



const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {accountType} = useSelector(state => state.profile)
    const logoutHandler = () =>{
        dispatch(logout());
        navigate('/login');
      }
  return (
    <div className='sidebar w-[20%] bg-black-bg h-[82vh] mt-1 flex items-start flex-col justify-center gap-[13vh] overflow-hidden'>
        <div className='flex flex-col w-full gap-1 ml-[4vw]'>
            <NavLink to={'/dashboard/profile'}>
                <div className=' w-full flex justify-start items-center gap-1 text-xl text-glod-color py-2 px-4 rounded-l-3xl'>
                    <CgProfile/>
                    <div>Profile</div>
                </div>
            </NavLink>
            {accountType === 'Student' && <NavLink to={'/dashboard/enrolled-courses'}>
                <div className=' w-full flex justify-start items-center gap-1 text-xl text-glod-color py-2 px-4 rounded-l-3xl'>
                    <FaGraduationCap/>
                    <div>Enrolled Courses</div>
                </div>
            </NavLink>}
            {accountType === 'Student' && <NavLink to={'/dashboard/your-cart'}>
                <div className=' w-full flex justify-start items-center gap-1 text-xl text-glod-color py-2 px-4 rounded-l-3xl'>
                    <BsCart4/>
                    <div>Your Collections</div>
                </div>
            </NavLink>}
            {accountType === 'Instructor' && <NavLink to={'/dashboard/dashboard'}>
                <div className=' w-full flex justify-start items-center gap-1 text-xl text-glod-color py-2 px-4 rounded-l-3xl'>
                <FaGraduationCap/>
                    <div>Dashboard</div>
                </div>
            </NavLink>}
            {accountType === 'Instructor' && <NavLink to={'/dashboard/my-courses'}>
                <div className=' w-full flex justify-start items-center gap-1 text-xl text-glod-color py-2 px-4 rounded-l-3xl'>
                <BsCart4/>
                    <div>My Courses</div>
                </div>
            </NavLink>}
            {accountType === 'Instructor' && <NavLink to={'/dashboard/add-courses'}>
                <div className=' w-full flex justify-start items-center gap-1 text-xl text-glod-color py-2 px-4 rounded-l-3xl'>
                    <FaPlus/>
                    <div>Add Courses</div>
                </div>
            </NavLink>}
        </div>
        <div className='w-full h-[0.2px] bg-white'></div>
        <div className='flex flex-col w-full gap-1 ml-[4vw]'>
            <NavLink to={'/dashboard/setting'}>
                <div className='w-full flex justify-start items-center gap-1 text-xl text-glod-color py-2 px-4 rounded-l-3xl'>
                    <MdSettings/>
                    <div>Settings</div>
                </div>
            </NavLink>
            <div onClick={logoutHandler} className='w-full flex justify-start cursor-pointer items-center gap-1 text-xl text-glod-color py-2 px-4 rounded-l-3xl'>
                <IoMdLogOut/>
                <div>Logout</div>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar