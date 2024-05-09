import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import BuyCourseCard from "./BuyCourseCard";

const HeroSection = ({course}) => {
  return (
    <div className="w-full h-auto ">
      <div className="w-full h-auto flex justify-between items-start gap-12">
        <div className="flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="text-white text-5xl font-bold">
              {course?.courseName}
            </h1>
            <p className="text-lg text-white/85">
              {course?.courseDescription}
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-1">
            <div className="flex justify-start items-center gap-2">
              <div className="text-yellow-200 text-xl font-semibold">
                3.8 ⭐⭐⭐⭐⭐
              </div>
              <div className="text-white text-xl font-semibold">
                {`(${course?.ratingAndReviews.length} Reviews)`}
              </div>
              <div className="text-white/80 font-semibold">
                {course?.studentsEnrolled.length} students enrolled
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 text-white/90">
              <HiOutlineExclamationCircle className="text-xl" />
              <span>Created By {course?.instructor?.firstName + " " + course?.instructor?.lastName}</span>
            </div>
            <div className="flex justify-start items-center gap-2 text-white/90">
              <BsGlobe className="text-xl" />
              <span>English</span>
            </div>
          </div>
          <div className="w-full py-6 px-10 flex flex-col justify-start items-start gap-5 border-[1px] border-white/80">
            <h1 className="text-[#f9cb5e] text-4xl font-bold">
              What you'll learn
            </h1>
            <p className="text-white/90 text-lg font-medium capitalize">
              {course?.whatYouWillLearn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
