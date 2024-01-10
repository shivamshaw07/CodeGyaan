import React from 'react'
import instructor from '../../../assets/Instructor.8b4c4f204053f0dfe844.png'
import { FaArrowRight } from 'react-icons/fa6';


const BecomeAnInstructor = () => {
  return (
    <div className='w-full h-auto pt-[15vh] pb-16'>
        <div className='w-[85%] mx-auto flex justify-center items-center'>
            <div className='w-[50%] relative'>
                <div className='w-[90%] h-full absolute z-10 bg-white bottom-5 -left-5'></div>
                <img src={instructor} alt="instructor" className='w-[90%] h-full z-20 relative shadow-lg shadow-black'/>
            </div>
            <div className='w-[50%] flex flex-col justify-start items-start gap-7'>
                <h1 className=' text-4xl text-white font-semibold  '>Become An <span className='text-[#cbab61]'>Instructor.</span></h1>
                <p className='text-white'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                <button className=' bg-glod-color hover:bg-[#b99b55] px-4 py-2 rounded text-white'><span className='mr-1 font-medium '>Start Teaching Today</span><span><FaArrowRight className='inline'/></span></button>

            </div>
        </div>
    </div>
  )
}

export default BecomeAnInstructor