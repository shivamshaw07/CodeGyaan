import React from 'react'

const ReviewSection = ({reviews}) => {
  // console.log(reviews);
  return (
    <div className='w-[100%] mx-auto border-[1px] border-white/80 p-5 flex flex-col justify-start items-start gap-5'>
      <div className='flex flex-col gap-2 '>
        <h1 className='text-3xl font-bold text-white'>Course <span className='text-glod-color'>Reviews</span>.</h1>
        <div className='flex justify-start items-baseline gap-2'>
          <h1 className='text-3xl font-bold text-white'>4.8/5</h1>
          <p className='text-base font-medium text-white/80'>(5 ratings) | 16 students</p></div>
      </div>  
      {reviews ?  <>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-start items-center gap-2'>
            <img className='w-[50px] h-[50px] rounded-full' src="https://source.unsplash.com/600x400" alt="" />
            <h2 className='text-lg font-semibold text-white/95'>Hitesh jii</h2>
          </div>
          <div>⭐⭐⭐⭐⭐</div>
          <p className='text-white/80'>Greate Course.The Web Development Bootcamp exceeded my expectations.</p>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-start items-center gap-2'>
            <img className='w-[50px] h-[50px] rounded-full' src="https://source.unsplash.com/600x400" alt="" />
            <h2 className='text-lg font-semibold text-white/95'>Hitesh jii</h2>
          </div>
          <div>⭐⭐⭐⭐⭐</div>
          <p className='text-white/80'>Greate Course.The Web Development Bootcamp exceeded my expectations.</p>
        </div>
      </div>   </> : <div className='text-white/90 text-4xl w-full text-center font-semibold'>No Reviews Available</div>}
    </div>
  )
}

export default ReviewSection