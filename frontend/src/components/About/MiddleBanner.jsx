import React from 'react'

const MiddleBanner = () => {
  return (
    <div className='max-w-[100vw] bg-black-bg'>
        <div className='w-[85vw] mx-auto flex justify-around items-center py-[5vh]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-3xl font-semibold'>500+</h1>
                <div className='text-white/60'>Active Students</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-3xl font-semibold'>10+</h1>
                <div className='text-white/60'>Mentors</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-3xl font-semibold'>100+</h1>
                <div className='text-white/60'>Courses</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-3xl font-semibold'>50+</h1>
                <div className='text-white/60'>Ratings</div>
            </div>
        </div>
    </div>
  )
}

export default MiddleBanner