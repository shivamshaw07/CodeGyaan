import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import IconBtn from "../common/IconBtn";

export default function VideoDetailsSidebar({ setReviewModal }) {
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");
  const [open,setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);
 
  useEffect(() => {
    (() => {
      if (!courseSectionData.length) return;
      const currentSectionIndx = courseSectionData.findIndex(
        (data) => data._id === sectionId
      );
      const currentSubSectionIndx = courseSectionData?.[
        currentSectionIndx
      ]?.subSection.findIndex((data) => data._id === subSectionId);
      const activeSubSectionId =
        courseSectionData[currentSectionIndx]?.subSection?.[
          currentSubSectionIndx
        ]?._id;
      setActiveStatus(courseSectionData?.[currentSectionIndx]?._id);
      setVideoBarActive(activeSubSectionId);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseSectionData, courseEntireData, location.pathname]);

  return (
    <>
      <div className="h-full w-auto bg-black-bg overflow-hidden overflow-y-scroll profile">
        {
            open ? (<div className="flex w-[320px] max-w-[350px] flex-col">
            <div className="px-2 flex flex-col items-start justify-between gap-2 gap-y-4 py-5 text-lg font-bold text-richblack-25">
              <div className="flex w-full items-center justify-between ">
                <div
                 onClick={() => setOpen(!open)}
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
                  title="back"
                >
                  <IoIosArrowBack size={30} className="text-white/85"/>
                </div>
                <IconBtn
                  text="Add Review"
                  customClasses="ml-auto"
                  onclick={() => setReviewModal(true)}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-white text-medium">{courseEntireData?.courseDetails?.courseName}</p>
                <p className="text-sm font-semibold text-white/80">
                  {completedLectures?.length} / {totalNoOfLectures}
                </p>
              </div>
            </div>
    
            <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
              {courseSectionData.map((course, index) => (
                <div
                  className="mt-2 cursor-pointer text-sm text-richblack-50 bg-blue-bg"
                  onClick={() => setActiveStatus(course?._id)}
                  key={index}
                >
                  {/* Section */}
                  <div className="flex flex-row justify-between  px-5 py-4">
                    <div className="w-[70%] font-semibold text-white capitalize">
                      {course?.sectionName}
                    </div>
                    <div className="flex items-center gap-3">
                      {/* <span className="text-[12px] font-medium">
                        Lession {course?.subSection.length}
                      </span> */}
                      <span
                        className={`transition-all duration-500`}
                      >
                        {
                            activeStatus === course?.sectionName ? (<BsChevronDown />) : (<BsChevronUp />)
                        }
                      </span>
                    </div>
                  </div>
    
                  {/* Sub Sections */}
                  {activeStatus === course?._id && (
                    <div className="transition-[height] duration-500 ease-in-out">
                      {course.subSection.map((topic, i) => (
                        <div
                          className={`flex gap-3  px-5 py-2 ${
                            videoBarActive === topic._id
                              ? "bg-glod-color bg-opacity-200 font-semibold text-black capitalize"
                              : "bg-black-bg hover:bg-slate-700 text-white capitalize"
                          } `}
                          key={i}
                          onClick={() => {
                            navigate(
                              `/view-course/${courseEntireData?.courseDetails?._id}/section/${course?._id}/sub-section/${topic?._id}`
                            );
                            setVideoBarActive(topic._id);
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={completedLectures.includes(topic?._id)}
                            onChange={() => {}}
                            className="w-4 h-4 bg-slate-400"
                          />
                          {topic.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>) 
          : 
          (<div onClick={() => setOpen(!open)} className="flex h-[35px] my-2 mx-2 w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"><IoIosArrowForward size={30} /></div>)
        }
      </div>
    </>
  );
}