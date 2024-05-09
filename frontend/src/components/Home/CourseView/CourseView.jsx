import React, { useEffect, useRef, useState } from "react";
import "swiper/swiper-bundle.css";
// import {coursesList} from '../../../data/courseListData.js'
import CourseCard from "./CourseCard.jsx";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { getAllCourses } from "../../../servies/operations/courseOpertaions.js";
const CourseView = () => {
  const [courseType, setCourseType] = useState("Trending");
  const [coursesList, setCoursesList] = useState();
  useEffect(() => {
    if(sessionStorage.getItem("getAllCourses")) setCoursesList(JSON.parse(sessionStorage.getItem("getAllCourses")))
    else {getAllCourses().then((data) => {
          setCoursesList(data);
        });}
  }, [courseType]);

  const myCardRef = useRef();

  const rightScroll = () => {
    const scrollLength = 400;
    const myElement = myCardRef.current;
    if (myElement) {
      myElement.scrollTo({
        left: myElement.scrollLeft + scrollLength,
        behavior: "smooth",
      });
    }
  };
  const leftScroll = () => {
    const scrollLength = 400;
    const myElement = myCardRef.current;
    if (myElement) {
      myElement.scrollTo({
        left: myElement.scrollLeft - scrollLength,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full py-10">
      <div className="w-[95%] md:w-[85%] lg:w-[85%] xl:w-[85%]  mx-auto flex flex-col justify-start items-start gap-4 pb-8">
        <h1 className="text-4xl w-full text-center md:text-start lg:text-start xl:text-start font-semibold text-white">
          Our <span className="text-glod-color">Courses.</span>
        </h1>
        <div className="flex justify-start items-center gap-12 pl-8 text-white font-light w-full border-b border-white/60 ">
          <div
            onClick={() => {
              setCourseType("Trending");
            }}
            className={
              courseType === "Trending"
                ? `cursor-pointer border-b-2 py-4`
                : `cursor-pointer `
            }
          >
            Trending
          </div>
          <div
            onClick={() => {
              setCourseType("Live");
            }}
            className={
              courseType === "Live"
                ? `cursor-pointer border-b-2 py-4`
                : `cursor-pointer `
            }
          >
            Live
          </div>
          <div
            onClick={() => {
              setCourseType("Community");
            }}
            className={
              courseType === "Community"
                ? `cursor-pointer border-b-2 py-4`
                : `cursor-pointer `
            }
          >
            Community
          </div>
        </div>
      </div>
      <div
        className="profile max-w-[95%] md:max-w-[85%] lg:max-w-[85%] xl:max-w-[85%] mx-auto flex justify-start items-start overflow-x-scroll gap-12 px-2"
        ref={myCardRef}
      >
        {coursesList?.map((card, index) => {
          if (courseType === "Trending") {
            return (
              <CourseCard
                key={index}
                instructor={card.instructor.firstName + " " + card.instructor.lastName}
                date={card.startDate}
                features={card.whatYouWillLearn}
                title={card.courseName}
                original_price={card.price}
                discounted_price={card.price - (20 / 100) * card.price}
                discount_percentage={20}
                img={card.thumbnail}
                id={card._id}
              />
            );
          } else if (courseType === "Live") {
            return (
              card.mode === "Online" && (
                <CourseCard
                key={index}
                instructor={card.instructor.firstName + " " + card.instructor.lastName}
                date={card.startDate}
                features={card.whatYouWillLearn}
                title={card.courseName}
                original_price={card.price}
                discounted_price={card.price - (20 / 100) * card.price}
                discount_percentage={20}
                img={card.thumbnail}
                id={card._id}
                />
              )
            );
          }
           else if (courseType === "Community") {
            return (
              card.mode === "Hybrid" && (
                <CourseCard
                key={index}
                instructor={card.instructor.firstName + " " + card.instructor.lastName}
                date={card.startDate}
                features={card.whatYouWillLearn}
                title={card.courseName}
                original_price={card.price}
                discounted_price={card.price - (20 / 100) * card.price}
                discount_percentage={20}
                img={card.thumbnail}
                id={card._id}
                />
              )
            );
          }
        })}
      </div>
      <div className="w-[85%] mx-auto flex justify-center items-center py-10 gap-9">
        <button className="text-3xl text-[#fff]" onClick={leftScroll}>
          <FaChevronCircleLeft />
        </button>
        <button className="text-3xl text-[#fff]" onClick={rightScroll}>
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default CourseView;
