import React from 'react'
import banner1 from '../../../../assets/banners/banner-2.png'
import { FaArrowRight } from 'react-icons/fa6';
import trophy from '../../../../assets/banners/trophy.png'
import location from '../../../../assets/banners/placement.png'

const HomeSection5pages2 = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center relative'>
    <div className='w-[50%] bg-[#3A9076] h-full flex flex-col justify-start items-start py-24 px-28 gap-8'>
        <div className='flex flex-col justify-start items-start gap-2'>
            <h1 className='text-4xl font-bold text-white'>One Stop Destination For <br /> All Placement Needs</h1>
            <p className='text-white font-light'>Resume Support, Mock Interview, <br />Exclusive Job Offers!</p>
        </div>
        <div className='flex flex-wrap justify-start items-center gap-20 my-8'>
            <div className='flex flex-col justify-start items-center '>
                <img src={trophy} alt="trophy" className='mb-1'/>
                <div className=' text-white'>500+ Hiring</div>
                <div className='text-white -mt-1'>Hiring</div>
            </div>
            <div className='flex flex-col justify-start items-center '>
                <img src={location} alt="trophy" className='mb-1'/>
                <div className=' text-white'>1500+ Hiring</div>
                <div className='text-white -mt-1'>Placements</div>
            </div>
        </div>
        <button className=' bg-white px-4 py-2 rounded '><span className='mr-1 font-light'>Explore</span><span><FaArrowRight className='inline'/></span></button>
        <button className='rounded text-white'><span className='mr-1 font-light'>Skip</span><span><FaArrowRight className='inline'/></span></button>

    </div>
    <div className='w-[50%] h-full'>
        <img src={banner1} alt="banner1" className='w-full h-full'/>
    </div>
    <div className='absolute w-[300px] h-[300px] bg-[#79BE43] rounded-full flex flex-col justify-center items-center text-white'>
        <div>
            <div className='text-xl font-bold'>“From</div>
            <div className='text-3xl font-bold'>Learning</div>
            <div className='text-xl font-bold'>To</div>
            <div className='text-3xl font-bold'>Earning”</div>
        </div>
    </div>
</div>
  )
}

export default HomeSection5pages2