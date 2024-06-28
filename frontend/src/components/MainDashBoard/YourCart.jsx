import React from 'react'
import wishList from '../../data/wishList'
import CourseCardd from './CourseCardd'
import { useSelector } from 'react-redux'

const YourCart = () => {
    const {cart} = useSelector((state) => state.cart);

  return (
    <div className="w-[80%] h-[81vh] overflow-hidden hover:overflow-y-scroll profile pb-[10vh] pt-[5vh] mt-1">
        <div className="w-[90%] mx-auto flex flex-col gap-[5vh]">
            <h1 className='text-4xl text-white font-bold'>Your <span className='text-glod-color'>Collections</span>.</h1>
            <div className='grid grid-cols-2 gap-6 w-[70%] items-start justify-start'>
                {
                    cart.map((item,index) => (
                        <CourseCardd key={index} image={item.thumbnail} title={item.courseName} price={item.price} id={item._id}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default YourCart