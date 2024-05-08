import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import {
  getFullDetailsOfCourse,
} from "../../../../servies/operations/courseOpertaions.js"
import { setCourse, setEditCourse } from "../../../../slices/courseSlice.js"
import RenderSteps from "../AddCourse/RenderSteps.jsx"

 const EditCourse =  () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { course } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const result = await getFullDetailsOfCourse(id, token)
      console.log("course",result);
      if (result) {
        dispatch(setEditCourse(true))
        dispatch(setCourse(result))
      }
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="grid flex-1 place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="w-full p-8 max-h-[79vh] overflow-y-scroll profile ">
      <h1 className="mb-14 text-4xl font-semibold text-white">
        Edit <span className="text-glod-color">Course.</span>
      </h1>
      <div className="mx-auto">
        {course ? (
          <RenderSteps />
        ) : (
          <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
            Course not found
          </p>
        )}
      </div>
    </div>
  )
}

export default EditCourse