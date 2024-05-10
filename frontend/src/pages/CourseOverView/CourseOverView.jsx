import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import HeroSection from '../../components/CourseOverView/HeroSection'
import CourseContent from '../../components/CourseOverView/CourseContent'
import ReviewSection from '../../components/CourseOverView/ReviewSection'
import Footer from '../../components/Footer/Footer'
import { getFullDetailsOfCourse } from '../../servies/operations/courseOpertaions'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setLoading } from '../../slices/UIslice'
import BuyCourseCard from '../../components/CourseOverView/BuyCourseCard'

const CourseOverView = () => {
  const [ result, setResult ] = useState(null)
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect( () => {
    // Move the async function inside the effect
    async function fetchData() {
      dispatch(setLoading(true));
      try {
        const resultData = await getFullDetailsOfCourse(id);
        setResult(resultData);
        console.log(resultData);
      } catch (error) {
        console.error("Error fetching course details:", error);
        // Handle error, e.g., display error message or redirect
      } finally {
        dispatch(setLoading(false));
      }
    }
    fetchData(); 
  }, []); 
  
  return (
    <div className='min-w-[100vw] min-h-[100vh] overflow-hidden'>
        <NavBar/>
        <div className='w-[85%] mx-auto flex justify-between items-start gap-9 py-12'>
          <div className='w-[80%]'>
            <HeroSection course={result}/>
            <CourseContent content={result?.courseContent} author={result?.instructor}/>
            <ReviewSection reviews={result?.ratingAndReviews}/>
          </div>
          <BuyCourseCard thumbnail={result?.thumbnail} id={result?._id} price={result?.price}/>
        </div>
        <Footer/>
    </div>
  )
}

export default CourseOverView