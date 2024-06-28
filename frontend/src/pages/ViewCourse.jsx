import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";
import { getFullCompleteCourse } from "../servies/operations/courseOpertaions";
import VideoDetailsSidebar from "../components/ViewCourse/VideoDetailsSidebar";
import CourseReviewModal from "../components/ViewCourse/CourseReviewModal";

export default function ViewCourse() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const {
    courseSectionData,
    courseEntireData,
    completedLectures,
    totalNoOfLectures,
  } = useSelector((state) => state.viewCourse);
  const dispatch = useDispatch();
  const [reviewModal, setReviewModal] = useState(false);
  const [lectures, setLectures] = useState(0);

  useEffect(() => {
    (async () => {
      const courseData = await getFullCompleteCourse(courseId, token);
      // console.log("Course Data here... ", courseData);
      dispatch(setCourseSectionData(courseData?.courseDetails?.courseContent));
      dispatch(setEntireCourseData(courseData));
      dispatch(setCompletedLectures(courseData.completedVideos));

      let totalLectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        totalLectures += sec?.subSection.length;
      });
      setLectures(totalLectures);
      dispatch(setTotalNoOfLectures(totalLectures));

      // console.log("Lectures", totalLectures);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, token, dispatch]);

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-between ">
      <NavBar/>
      <div className="relative flex h-[81vh]">
        <VideoDetailsSidebar setReviewModal={setReviewModal} />
        <div className=" flex-1 overflow-auto">
          <div className="mx-6">
            <Outlet />
          </div>
        </div>
      </div>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </div>
  )
}