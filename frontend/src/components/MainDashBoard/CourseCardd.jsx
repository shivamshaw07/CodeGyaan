import React from 'react'
import { IoBookmarks } from "react-icons/io5";
import { removeFromCart } from '../../servies/operations/cartOperation';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../slices/UIslice';
import toast from 'react-hot-toast';
const CourseCardd = ({image,title,price,id}) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = async() => {
    removeFromCart(dispatch, setLoading, id, toast); 

  }
  return (
    <div className='flex flex-col justify-between items-start rounded-md relative bg-black-bg pb-3 w-full'>
        <img src={image} alt="image" className='w-full h-[160px] rounded-md'/>
        <div className='flex justify-between items-center w-full px-2'>
          <div>
            <div className='text-white/90 font-semibold pt-2 '>{title}</div>
            <div className='text-white/90 font-semibold text-glod-color'>Rs. {price}</div>
          </div>
          <div onClick={removeFromCartHandler} className='text-white text-2xl cursor-pointer'>
            <IoBookmarks/>
          </div>
        </div>
    </div>
  )
}

export default CourseCardd