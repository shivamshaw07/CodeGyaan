import { useEffect, useState } from "react"
import ProgressBar from "@ramonak/react-progress-bar"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getEnrolledCourses } from "../../servies/operations/profileOperation.js"

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [enrolledCourses, setEnrolledCourses] = useState(null)
  const getUserEnrolledCourses = async () => {
    try {
      setEnrolledCourses(await getEnrolledCourses(token))
    } catch (error) {
      console.log("Could not fetch enrolled courses.")
    }
  };
  useEffect(() => {
    getUserEnrolledCourses();
  }, [])

  return (
    <div className="w-[80%] h-[81vh]  profile pb-[10vh] pt-[5vh] mt-1 p-8">
      <div className="text-4xl text-white font-bold">Enrolled <span className="text-glod-color">Courses</span>.</div>
      {!enrolledCourses ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not enrolled in any course yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div className="my-8 text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-lg bg-richblack-500 ">
            <p className="w-[45%]  py-3 text-white font-semibold text-lg">Course Name</p>
            <p className="w-1/4 py-3 text-white font-semibold text-lg">Duration</p>
            <p className="flex-1 py-3 text-white font-semibold text-lg ">Progress</p>
          </div>
          {/* Course Names */}
          {enrolledCourses.map((course, i, arr) => (
            // console.log(course),
            <div
              className={`flex items-center border  ${
                i === arr.length - 1 ? "rounded-lg" : "rounded-none"
              }`}
              key={i}
            >
              <div
                className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
                onClick={() => {
                  navigate(
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                  )
                }}
              >
                <img
                  src={course.thumbnail}
                  alt="course_img"
                  className="h-22 max-w-[180px] min-w-[180px] rounded-lg object-cover"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold text-xl text-white">{course.courseName}</p>
                  <p className="text-xs text-white/80">
                    {course.courseDescription.length > 50
                      ? `${course.courseDescription.slice(0, 50)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>
              <div className="w-1/4 px-2 py-3">{course?.totalDuration}</div>
              <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                <p className="text-white">Progress: {course.progressPercentage || 0}%</p>
                <ProgressBar
                  bgColor="linear-gradient(90deg, #f9cb5e 0%, #FFC000 100%)"
                  completed={course.progressPercentage || 90}
                  height="8px"
                  isLabelVisible={false}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
            