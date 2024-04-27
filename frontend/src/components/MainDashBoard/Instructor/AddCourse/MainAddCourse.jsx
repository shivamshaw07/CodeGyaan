import React from 'react'
import CourseIntro from './CourseIntro'

const MainAddCourse = () => {
  return (
    <div className="w-[80%] h-[81vh] overflow-hidden hover:overflow-y-scroll profile pb-[10vh] pt-[5vh] mt-1">
      <div className="w-[90%] mx-auto flex flex-col gap-[3vh]">
        <h1 className="text-4xl text-white font-bold">
          Add <span className="text-glod-color">Course</span>.
        </h1>
       
            <CourseIntro/>
        
      </div>
    </div>
  )
}

export default MainAddCourse