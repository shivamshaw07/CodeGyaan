import React from 'react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const ReviewCard = (props) => {
  return (
    <div className='min-w-[280px] h-[330px] bg-black-bg rounded-xl shadow-md shadow-black'>
        <h1 className='w-full text-center py-1 bg-[#6d6a5e] rounded-t-xl font-semibold text-green-500'>Increment {props.increment}</h1>
        <div className='w-full text-white flex px-3 py-5 gap-4 justify-start items-center'>
            <div className='uppercase bg-glod-color text-center py-3 px-4 text-xl rounded-full'>{props.short_name}</div>
            <div className='flex flex-col justify-start items-start'>
                <div className='text-lg font-semibold'>
                    {props.name}
                </div>
                <div className='text-sm font-light'>
                    {props.course}
                </div>
            </div>
        </div>
        <p className='px-3 text-white font-light '>{props.feedback}</p>
        <div className='flex justify-between items-center px-3 text-white mt-12'>
            <div>
                <div className='font-bold'>From</div>
                <div>{props.history[0].from}</div>
            </div>
            <LiaLongArrowAltRightSolid className='text-2xl'/>
            <div className='text-glod-color'>
                <div className='font-bold'>To</div>
                <div>{props.history[0].to}</div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard