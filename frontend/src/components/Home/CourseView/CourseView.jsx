import React, { useEffect, useState } from 'react'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import {coursesList} from '../../../data/courseListData.js'
import CourseCard from './CourseCard.jsx'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const CourseView = () => {
  const [courseType,setCourseType] = useState('Trending')
  useEffect(()=>{
    console.log('hii');
  },[courseType])
  return (
    <div className='w-full py-10'>
      <div className='w-[85%] mx-auto flex flex-col justify-start items-start gap-4 pb-8'>
        <h1 className='text-4xl font-semibold text-white'>Our <span className='text-glod-color'>Courses.</span></h1>
        <div className='flex justify-start items-center gap-12 pl-8 text-white font-light w-full border-b border-white/60 '>
          <div onClick={()=>{setCourseType('Trending')}} className={courseType === 'Trending' ? `cursor-pointer border-b-2 py-4` : `cursor-pointer `}>Trending</div>
          <div onClick={()=>{setCourseType('Live')}} className={courseType === 'Live' ? `cursor-pointer border-b-2 py-4` : `cursor-pointer `}>Live</div>
          <div onClick={()=>{setCourseType('Community')}} className={courseType === 'Community' ? `cursor-pointer border-b-2 py-4` : `cursor-pointer `}>Community</div>
        </div>
      </div>
        <div className='max-w-[85%] mx-auto flex overflow-x-scroll gap-12'>

            {
                coursesList.map((card,index) => {
                  if (courseType  === 'Trending') {
                    return <CourseCard key={index} instructor={card.instructor} date={card.start_date} features={card.features} title={card.title} original_price={card.price.original_price} discounted_price={card.price.discounted_price} discount_percentage={card.price.discount_percentage} img={card.img}/>
                  }
                  else if (courseType  === 'Live') {
                    return card.mode === 'live' && <CourseCard key={index} instructor={card.instructor} date={card.start_date} features={card.features} title={card.title} original_price={card.price.original_price} discounted_price={card.price.discounted_price} discount_percentage={card.price.discount_percentage} img={card.img}/>
                  }
                })
            }
        </div>
            <div className='w-[85%] mx-auto flex justify-center items-center py-10 gap-9'>
              <button className='text-3xl text-[#fff]'><FaChevronCircleLeft/></button>
              <button className='text-3xl text-[#fff]'><FaChevronCircleRight/></button>
            </div>
    </div>
  )
}

export default CourseView