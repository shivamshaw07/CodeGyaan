import React from 'react'
import { FaShareFromSquare } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { setLoading } from '../../slices/UIslice';
import {  addToCartt } from '../../servies/operations/cartOperation';
import toast from 'react-hot-toast';

const BuyCourseCard = ({thumbnail, price,id}) => {
  const dispatch = useDispatch();
  const addToCartHandler = async() => {
    addToCartt(dispatch, setLoading, id, toast);    
  }
  return (
    <div className='w-[490px] h-[530px] bg-black-bg rounded-xl shadow-md shadow-black mr-9 p-4'>
        <div className='w-full h-[220px] bg-glod-color rounded-t-xl flex justify-center items-center'>
            <img src={thumbnail} alt="img" className='w-full h-[220px]'/>
        </div>
        <div className='flex flex-col justify-between items-center p-2 gap-5'>
            <h1 className='text-4xl font-semibold w-full text-start text-white'>Rs. {price}</h1>
            <button className='bg-glod-color -mt-2 px-4 py-2 rounded w-full text-center font-semibold text-white/90 text-lg'>Buy</button>
            <button onClick={addToCartHandler} className='bg-glod-color px-4 py-2 rounded w-full text-center font-semibold text-white/90 text-lg'>Add to Cart</button>
            <p className='text-white/90 font-semibold'>30-Day Money-Back Guarantee</p>
            <div className='flex justify-center items-center gap-2'>
                <FaShareFromSquare className='text-3xl text-glod-color'/>
                <div className='text-white/90 font-semibold'>Share</div>
            </div>
        </div>
    </div>
  )
}

export default BuyCourseCard