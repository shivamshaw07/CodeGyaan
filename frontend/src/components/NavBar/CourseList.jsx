import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCourseCategories } from '../../servies/operations/courseOpertaions'

const CourseList = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCourseCategories();
      setCategories(categories);  
    } 
    if(!sessionStorage.getItem("category")){
      getCategories()
    }
    else{
      setCategories(JSON.parse(sessionStorage.getItem("category")))
    }
  }, [])
  
  return (
    
    <div className=' absolute top-[12.5vh] left-[25.7vw] z-20 hidden group-hover:block courselist py-4 bg-transparent'>
      <div className='bg-[#2c2d30] rounded-md'>
        <div className='flex flex-col justify-start items-start '>
          {
            categories.map((category,id) => (
              <div key={id} className='hover:bg-gray-700 w-full px-6 py-2'>{category.name}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CourseList