import React from 'react'

const CourseList = () => {
  return (
    <div className='bg-[#2c2d30] absolute top-[14.5vh] left-[8.7vw] z-20 hidden group-hover:block courselist rounded-md'>
        <div className='flex flex-col justify-start items-start '>
            <div className='hover:bg-gray-700 w-full px-6 py-2'>Block chain</div>
            <div className='hover:bg-gray-700 w-full px-6 py-2'>Android</div>
            <div className='hover:bg-gray-700 w-full px-6 py-2'>Web Dev</div>
            <div className='hover:bg-gray-700 w-full px-6 py-2'>AI</div>
            <div className='hover:bg-gray-700 w-full px-6 py-2'>DevOps</div>
            <div className='hover:bg-gray-700 w-full px-6 py-2'>C++ JAVA Python</div>
            <div className='hover:bg-gray-700 w-full px-6 py-2'>ML</div>
        </div>
    </div>
  )
}

export default CourseList