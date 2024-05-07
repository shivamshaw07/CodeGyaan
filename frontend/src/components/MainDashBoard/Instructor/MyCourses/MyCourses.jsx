import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../../servies/operations/courseOpertaions.js"
import IconBtn from "../../../common/IconBtn"
import CoursesTable from "../InctructorCourses/CoursesTable.jsx"

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-[81vh] overflow-y-scroll profile px-8 py-8">
      <div className="mb-14 flex items-center justify-between ">
        <h1 className="text-4xl font-medium text-glod-color">My <span className="text-white">Courses.</span></h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-courses")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}