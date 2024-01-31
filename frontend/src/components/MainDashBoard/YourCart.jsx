import React from 'react'
import wishList from '../../data/wishList'
import CourseCard from './courseCard'

const YourCart = () => {
  return (
    <div className="w-[80%] h-[81vh] overflow-hidden hover:overflow-y-scroll profile pb-[10vh] pt-[5vh] mt-1">
        <div className="w-[90%] mx-auto flex flex-col gap-[5vh]">
            <h1 className='text-4xl text-white font-bold'>Your <span className='text-glod-color'>Collections</span>.</h1>
            <div className='flex flex-wrap gap-6 w-full mx-auto items-center justify-start'>
                {
                    wishList.map((item,index) => (
                        <CourseCard key={index} image={item.img} title={item.title}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default YourCart