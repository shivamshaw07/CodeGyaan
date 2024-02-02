import React from "react";
import { courseReviwe } from "../../data/courseReviwe";

const Review = () => {
  return (
    <div className="max-w-[100vw] flex flex-col justify-center items-center gap-5 my-[10vh]">
        <h1 className="text-4xl font-bold text-white">Reviews from other <span className="text-glod-color">Learners</span>.</h1>
        <div className="w-[85vw] mx-auto overflow-x-scroll flex gap-6">
        {courseReviwe.map((item, index) => (
            <div key={index} className="p-5 flex justify-start flex-col gap-3 bg-black-bg min-w-[20vw] text-white">
            <div className="flex justify-start items-center gap-3">
                    <div className="w-[40px] h-[40px] text-center text-lg font-bold pt-[4px] bg-cyan-300 text-black rounded-full">{item.short}</div>
                    <div>
                        <div className="text-sm font-bold">{item.personName}</div>
                        <div className="text-xs text-white/55">{item.programmingTech}</div>
                    </div>
                </div>
                <div className="font-light">{item.review}</div>
                <div><span className="pr-1">{item.rating}</span>⭐⭐⭐⭐</div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Review;
