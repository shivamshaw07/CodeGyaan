import React from "react";
import banner1 from "../../../../assets/banners/banner-2.png";
import { FaArrowRight } from "react-icons/fa6";
import trophy from "../../../../assets/banners/trophy.png";
import location from "../../../../assets/banners/placement.png";

const HomeSection5pages2 = () => {
  return (
    <div className="min-w-[100%] h-[100vh] flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-center items-center relative">
      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] bg-[#3A9076] h-[50%] md:h-[100%] lg:h-[100%] xl:h-[100%] flex flex-col justify-start items-start py-3 md:py-24 lg:py-24 xl:py-24 px-3 md:px-28 lg:px-28 xl:px-28 gap-8">
        <div className="flex w-[100%] flex-col justify-start items-start gap-2">
          <h1 className="text-[22px] md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white w-full text-center md:text-start lg:text-start xl:text-start">
            One Stop Destination For <br className="hidden md:hidden lg:block xl:block" /> All Placement Needs
          </h1>
          <p className="text-white font-light w-full text-center md:text-start lg:text-start xl:text-start">
            Resume Support, Mock Interview, <br className="hidden md:hidden lg:block xl:block"/>
            Exclusive Job Offers!
          </p>
        </div>
        <div className="flex justify-center md:justify-start lg:justify-start xl:justify-start items-center gap-4 w-full">
          <div className="flex flex-col justify-start items-center ">
            <img src={trophy} alt="trophy" className="mb-1" />
            <div className=" text-white">500+ Hiring</div>
            <div className="text-white -mt-1">Partners</div>
          </div>
          <div className="flex flex-col justify-start items-center ">
            <img src={location} alt="trophy" className="mb-1" />
            <div className=" text-white">1500+ Hiring</div>
            <div className="text-white -mt-1">Placements</div>
          </div>
        </div>
        <button className=" bg-white px-4 py-2 rounded w-full md:w-auto lg:w-auto xl:w-auto ">
          <span className="mr-1 font-light">Explore</span>
          <span>
            <FaArrowRight className="inline" />
          </span>
        </button>
        <button className="rounded text-white hidden md:block lg:block xl:block ">
          <span className="mr-1 font-light">Skip</span>
          <span>
            <FaArrowRight className="inline" />
          </span>
        </button>
      </div>
      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] h-[50%] md:h-[100%] lg:h-[100%] xl:h-[100%]">
        <img src={banner1} alt="banner1" className="w-full h-full" />
      </div>
      <div className="hidden md:block lg:block xl:block absolute">
        <div className=" w-[300px] h-[300px] bg-[#79BE43] rounded-full flex flex-col justify-center items-center text-white">
          <div>
            <div className="text-xl font-bold">“From</div>
            <div className="text-3xl font-bold">Learning</div>
            <div className="text-xl font-bold">To</div>
            <div className="text-3xl font-bold">Earning”</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection5pages2;
