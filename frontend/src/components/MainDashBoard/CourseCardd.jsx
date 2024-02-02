import React from 'react'
import {BsFillHeartFill} from 'react-icons/bs'

const CourseCardd = ({image,title}) => {
  return (
    <div className='flex flex-col rounded-md cursor-pointer relative '>
        <img src={image} alt="image" className='max-w-[250px] min-w-[300px] h-[160px] rounded-md'/>
        <div className='text-white/90 font-semibold'>{title}</div>
        <div className='flex justify-center items-center absolute text-red-500 text-sm bg-white rounded-full w-[25px] h-[25px] right-2 top-2'>
            <BsFillHeartFill/>
        </div>
    </div>
  )
}

export default CourseCardd