import React from 'react'

const WorldClass = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-2 max-w-[85vw] mx-auto my-[15vh]'>
        <div className='col-span-2 flex flex-col gap-4 pb-6'>
            <h1 className='text-4xl text-white font-bold'>World-Class Learning for <span className='text-glod-color'>Anyone, Anywhere</span></h1>
            <p className='text-white/80'>CodeGyann partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>
            <button className='py-3 px-6 bg-[#cbab61] rounded font-semibold text-white hover:bg-[#b99b55] w-[10vw]'>Learn More</button>
        </div>
        <div className='p-6 bg-[#82827f] flex flex-col gap-[4vh]'>
            <h1 className='text-white text-xl font-semibold '>Our Learning Methods</h1>
            <p className='text-white/80 text-[15px]'>CodeGyann partners with more than 275+ leading universities and companies to bring</p>
        </div>
        <div className='p-6 bg-black-bg flex flex-col gap-[4vh]'>
            <h1 className='text-white text-xl font-semibold '>Certification</h1>
            <p className='text-white/80 text-[15px]'>CodeGyann partners with more than 275+ leading universities and companies to bring</p>
        </div>
        <div className='col-span-2 grid grid-rows-1 grid-cols-2'>
            <div></div>
        <div className='p-6 bg-[#82827f] flex flex-col gap-[4vh]'>
            <h1 className='text-white text-xl font-semibold '>Rating "Auto-grading"</h1>
            <p className='text-white/80 text-[15px]'>CodeGyann partners with more than 275+ leading universities and companies to bring</p>
        </div>
        </div>
        <div className='p-6 bg-black-bg flex flex-col gap-[4vh]'>
            <h1 className='text-white text-xl font-semibold '>Curriculum Based on Industry Needs</h1>
            <p className='text-white/80 text-[15px]'>Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>
        </div>
        <div className='p-6 bg-[#82827f] flex flex-col gap-[4vh]'>
            <h1 className='text-white text-xl font-semibold '>Ready to Work</h1>
            <p className='text-white/80 text-[15px]'>Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>
        </div>
    </div>
  )
}

export default WorldClass