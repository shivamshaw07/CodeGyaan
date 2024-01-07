import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { GiPodiumWinner,GiGraduateCap } from "react-icons/gi";
import { IoDiamondSharp , IoCodeSlashSharp} from "react-icons/io5";
import { MdWork } from "react-icons/md";
import rightGif from '../../../assets/output-onlinegiftools.gif'


const HomeSection4 = () => {
  return (
    <div className='w-full py-10'>
        <div className='w-[85%] mx-auto'>
            <h1 className='text-4xl text-white font-semibold'>Explore Our <span className='text-[#cbab61]'>Ecosystem.</span></h1>
            <p className='font-extralight text-white'>A one-stop destination for all your learning to placement needs</p>
        </div>
        <div className='w-[85%] mx-auto flex justify-between items-center gap-10'>
          <div className='w-8/12 flex flex-col flex-wrap justify-center items-center gap-5  h-[140vh]'>
              <div className='w-[340px] h-[260px] bg-black-bg flex flex-col justify-between items-start p-6 text-white group shadow-md shadow-black hover:bg-[#1c1b1b] transition-all duration-500'>
                  <IoCodeSlashSharp className='bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white text-5xl rounded-full'/>
                  <h1 className='text-2xl font-semibold'>CodeGyaan Lab</h1>
                  <p className='font-light'>Buying a new PC is no longer required, Access unlimited computing power!</p>
                  <button className=' bg-glod-color px-4 py-2 rounded hover:bg-[#b99b55] invisible group-hover:visible transition-all duration-200'><span className='mr-1'>Explore</span><span><FaArrowRight className='inline'/></span></button>
              </div>
              <div className='w-[340px] h-[260px] bg-black-bg flex flex-col justify-between items-start p-6 text-white group shadow-md shadow-black hover:bg-[#1c1b1b] transition-all duration-500'>
                  <GiPodiumWinner className='bg-gradient-to-r from-red-300 to-red-500 p-3 text-white text-5xl rounded-full'/>
                  <h1 className='text-2xl font-semibold'>Experience Portal</h1>
                  <p className='font-light'>Self-paced portal prioritizes hands-on training with 570+ internship projects.</p>
                  <button className=' bg-glod-color px-4 py-2 rounded hover:bg-[#b99b55] invisible group-hover:visible transition-all duration-200'><span className='mr-1'>Explore</span><span><FaArrowRight className='inline'/></span></button>
              </div>
              <div className='w-[340px] h-[260px] bg-black-bg flex flex-col justify-between items-start p-6 text-white group shadow-md shadow-black hover:bg-[#1c1b1b] transition-all duration-500'>
                  <GiGraduateCap className='bg-gradient-to-r from-purple-300 to-purple-500 p-3 text-white text-5xl rounded-full'/>
                  <h1 className='text-2xl font-semibold'>Hall Of Fame</h1>
                  <p className='font-light'>Our student placements and 100K+ career transitions speak volumes.</p>
                  <button className=' bg-glod-color px-4 py-2 rounded hover:bg-[#b99b55] invisible group-hover:visible transition-all duration-200'><span className='mr-1'>Explore</span><span><FaArrowRight className='inline'/></span></button>
              </div>
              <div className='w-[340px] h-[260px] bg-black-bg flex flex-col justify-between items-start p-6 text-white group shadow-md shadow-black hover:bg-[#1c1b1b] transition-all duration-500'>
                  <MdWork className='bg-gradient-to-r from-yellow-300 to-yellow-500 p-3 text-white text-5xl rounded-full'/>
                  <h1 className='text-2xl font-semibold'>Job Portal</h1>
                  <p className='font-light'>Use exceptional templates for a stand-out resume minus the sign up process.</p>
                  <button className=' bg-glod-color px-4 py-2 rounded hover:bg-[#b99b55] invisible group-hover:visible transition-all duration-200'><span className='mr-1'>Explore</span><span><FaArrowRight className='inline'/></span></button>
              </div>
              <div className='w-[340px] h-[260px] bg-black-bg flex flex-col justify-between items-start p-6 text-white group shadow-md shadow-black hover:bg-[#1c1b1b] transition-all duration-500'>
                  <IoDiamondSharp className='bg-gradient-to-r from-green-300 to-green-500 p-3 text-white text-5xl rounded-full'/>
                  <h1 className='text-2xl font-semibold'>Become an affiliate</h1>
                  <p className='font-light'>Explore affiliate marketing opportunities and attain financial freedom.</p>
                  <button className=' bg-glod-color px-4 py-2 rounded hover:bg-[#b99b55] invisible group-hover:visible transition-all duration-200'><span className='mr-1'>Explore</span><span><FaArrowRight className='inline'/></span></button>
              </div>
          </div>
          <div>
              <img src={rightGif} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default HomeSection4