import React from 'react'
import banner1 from '../../../../assets/banners/banner-3.png'
import { FaArrowRight } from 'react-icons/fa6';

const HomeSection5pages3 = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center relative'>
    <div className='w-[50%] bg-[#b35647] h-full flex flex-col justify-start items-start py-24 px-28 gap-8'>
        <div className='flex flex-col justify-start items-start gap-2'>
            <h1 className='text-4xl font-bold text-white'>Real-Time Industry <br /> Experience</h1>
            <p className='text-white font-light'>Learn & experience real-time development as per industry <br /> standards</p>
        </div>
        <div className='flex flex-wrap justify-start items-center gap-x-4 gap-y-5 my-8'>
            <div className='flex flex-col justify-start items-start '>
                <div className='text-xl font-bold text-[#e39f97]' style={{WebkitTextStroke:".2px black"}}>15+</div>
                <div className='font-semibold text-white'>Domains</div>
            </div>
            <div className='flex flex-col justify-start items-start '>
                <div className='text-xl font-bold text-[#e39f97]' style={{WebkitTextStroke:".2px black"}}>430+</div>
                <div className='font-semibold text-white'>Projects</div>
            </div>
            <div className='flex flex-col justify-start items-start '>
                <div className='text-xl font-bold text-[#e39f97]' style={{WebkitTextStroke:".2px black"}}>3000+</div>
                <div className='font-semibold text-white'>Interns</div>
            </div>
        </div>
        <button className=' bg-white px-4 py-2 rounded '><span className='mr-1 font-light'>Explore</span><span><FaArrowRight className='inline'/></span></button>
        <button className='rounded text-white'><span className='mr-1 font-light'>Skip</span><span><FaArrowRight className='inline'/></span></button>

    </div>
    <div className='w-[50%] h-full'>
        <img src={banner1} alt="banner1" className='w-full h-full'/>
    </div>
    <div className='absolute w-[300px] h-[300px] bg-[#CF6A5D] rounded-full flex flex-col justify-center items-center text-white'>
    <div>
            <div className='text-xl font-bold'>“Earn your</div>
            <div className='text-3xl font-bold'>Experience</div>
            <div className='text-3xl font-bold'>Letter”</div>
        </div>
    </div>
</div>
  )
}

export default HomeSection5pages3