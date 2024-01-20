import React from 'react'
import banner1 from '../../../../assets/banners/banner-4.png'
import { FaArrowRight } from 'react-icons/fa6';
import live from '../../../../assets/banners/live.png'
import course from '../../../../assets/banners/course.png'


const HomeSection5pages4 = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center relative'>
    <div className='w-[50%] bg-[#80467D] h-full flex flex-col justify-start items-start py-24 px-28 gap-8'>
        <div className='flex flex-col justify-start items-start gap-2'>
            <h1 className='text-4xl font-bold text-white'>Flexible Learning Just <br /> For You!</h1>
            <p className='text-white font-light'>PW Skills courses are designed to fit every individual's needs. <br /> Learn through LIVE & self-paced courses!</p>
        </div>
        <div className='flex flex-wrap justify-start items-center gap-20 my-8'>
            <div className='flex flex-col justify-start items-center '>
                <img src={course} alt="trophy" className='mb-1'/>
                <div className=' text-white'>15+ Self Paced</div>
                <div className='text-white -mt-1'>Courses</div>
            </div>
            <div className='flex flex-col justify-start items-center '>
                <img src={live} alt="trophy" className='mb-1'/>
                <div className=' text-white'>10+ Live</div>
                <div className='text-white -mt-1'>Courses</div>
            </div>
        </div>
        <button className=' bg-white px-4 py-2 rounded '><span className='mr-1 font-light'>Explore</span><span><FaArrowRight className='inline'/></span></button>
        <button className='rounded text-white'><span className='mr-1 font-light'>Skip</span><span><FaArrowRight className='inline'/></span></button>

    </div>
    <div className='w-[50%] h-full'>
        <img src={banner1} alt="banner1" className='w-full h-full'/>
    </div>
    <div className='absolute w-[300px] h-[300px] bg-[#C779E2] rounded-full flex flex-col justify-center items-center text-white'>
    <div>
            <div className='text-3xl font-bold'>“Learning</div>
            <div className='text-xl font-bold'>Made For</div>
            <div className='text-3xl font-bold'>Everyone”</div>
        </div>
    </div>
</div>
  )
}

export default HomeSection5pages4