import React from 'react'
import { GiPodiumWinner,GiGraduateCap } from "react-icons/gi";
import { IoDiamondSharp , IoCodeSlashSharp} from "react-icons/io5";
import girlStudy from '../../../assets/TimelineImage.a610b1e5d891ac77fe93.png'

const HomeSection3 = () => {
  return (
    <div className='w-full py-10'>
        <div className='w-[85%] mx-auto flex flex-col justify-start items-start'>
            <div className='flex justify-between items-start w-full'>
                <h1 className='w-[50%] text-4xl text-white font-semibold'>Get the skills you need for a <span className='text-[#cbab61]'>job that is in demand.</span></h1>
                <div className='w-[50%] flex flex-col justify-start items-start gap-5'>
                    <p className='text-white font-light'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                    <button className='py-3 px-6 bg-[#cbab61] rounded-lg font-semibold text-white hover:bg-[#b99b55]'>Learn More</button>
                </div>
            </div>
            <div className='w-full flex justify-around items-start py-16'>
                <div className='flex flex-col justify-start items-start gap-4'>
                    <div className='flex justify-center items-center gap-7'>
                        <GiPodiumWinner className='text-5xl text-[#939ad8]'/>
                        <div className='flex flex-col justify-start items-start gap-1'>
                            <h2 className='text-white text-xl font-semibold'>Leadership</h2>
                            <p className='text-white text-sm'>Fully committed to the success company</p>
                        </div>
                    </div>
                    <div className='h-[5vh] w-full border-dotted border-l-2 ml-6'>

                    </div>
                    <div className='flex justify-center items-center gap-7'>
                        <GiGraduateCap className='text-5xl text-rose-500'/>
                        <div className='flex flex-col justify-start items-start'>
                            <h2 className='text-white text-xl font-semibold'>Responsibility</h2>
                            <p className='text-white text-sm'>Students will always be our top priority</p>
                        </div>
                    </div>
                    <div className='h-[5vh] w-full border-dotted border-l-2 ml-6'>

                    </div>
                    <div className='flex justify-center items-center gap-7'>
                        <IoDiamondSharp className='text-5xl text-green-400'/>
                        <div className='flex flex-col justify-start items-start'>
                            <h2 className='text-white text-xl font-semibold'>Flexibility</h2>
                            <p className='text-white text-sm'>The ability to switch is an important skills</p>
                        </div>
                    </div>
                    <div className='h-[5vh] w-full border-dotted border-l-2 ml-6'>

                    </div>
                    <div className='flex justify-center items-center gap-7'>
                        <IoCodeSlashSharp className='text-5xl text-yellow-400'/>
                        <div className='flex flex-col justify-start items-start'>
                            <h2 className='text-white text-xl font-semibold'>Solve the problem</h2>
                            <p className='text-white text-sm'>Code your way to a solution</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className=' h-auto z-10 shadow-2xl shadow-black/100'>
                        <img src={girlStudy} alt="timeline" className='w-[40vw] h-auto'/>
                    </div>
                    <div className='bg-[#cbab61] absolute -bottom-14 left-5 z-20 w-[92%] flex justify-center items-center py-7 px-3'>
                        <div className='flex justify-center items-center w-[50%] border-r gap-6'>
                            <div className='text-4xl font-bold text-white'>10</div>
                            <div className='text-sm font-semibold text-[#f6f1e5]'>YEARS<br />EXPERIENCES</div>
                        </div>
                        <div className='flex justify-center items-center w-[50%] gap-6'>
                            <div className='text-4xl font-bold text-white'>250</div>
                            <div className='text-sm font-semibold text-[#f6f1e5]'>TYPES OF <br /> COURSES</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection3