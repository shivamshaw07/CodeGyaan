import React from 'react'
import review from '../../../data/review'
import ReviewCard from './ReviewCard'

const SuccessStory = () => {
  return (
    <div className='w-full h-auto py-10'>
        <div className='w-[85%] mx-auto'>
            <h1 className=' text-4xl text-white font-semibold  '>Success <span className='text-[#cbab61]'>Stories.</span></h1>
            <div className='w-full overflow-x-scroll flex gap-10 pt-10'>
                {
                    review.map((item,index) => (
                        <ReviewCard key={index} name={item.name} increment={item.salary_increment} short_name={item.short_name} feedback={item.feedback} course={item.course} history={item.history}/>
                    ))
                }
            </div>
        </div>
        
    </div>
  )
}

export default SuccessStory