import React from 'react'
import instructor from '../../../assets/Instructor.8b4c4f204053f0dfe844.png'
import { FaArrowRight } from 'react-icons/fa6';


const BecomeAnInstructor = () => {
  return (
    <div className='w-full h-auto pt-[15vh] pb-16'>
        <div className='w-[95%] md:w-[85%] lg:w-[85%] xl:w-[85%] mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-6'>
            <div className='w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]  relative flex justify-center items-center mx-auto'>
                <div className='w-[100%] h-full absolute z-10 bg-white bottom-5 -left-5'></div>
                <img src={instructor} alt="instructor" className='w-[100%] h-full z-20 relative shadow-lg shadow-black'/>
            </div>
            <div className='w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]  flex flex-col justify-start items-start gap-7'>
                <h1 className=' text-4xl text-white font-semibold w-full '>Become An <span className='text-[#cbab61]'>Instructor.</span></h1>
                <p className='text-white'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                <button className='w-full md:w-auto lg:w-auto xl:w-auto bg-glod-color hover:bg-[#b99b55] px-4 py-2 rounded text-white'><span className='mr-1 font-medium '>Start Teaching Today</span><span><FaArrowRight className='inline'/></span></button>

            </div>
        </div>
    </div>
  )
}

export default BecomeAnInstructor