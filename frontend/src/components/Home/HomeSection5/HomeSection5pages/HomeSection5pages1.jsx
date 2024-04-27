import React from "react";
import banner1 from "../../../../assets/banners/banner-1.png";
import { FaArrowRight } from "react-icons/fa6";
import amazon from "../../../../assets/banners/amazon-logo.png";
import google from "../../../../assets/banners/google-logo.png";
import walmart from "../../../../assets/banners/walmart-logo.png";
import microsoft from "../../../../assets/banners/microsoft-logo.png";
import linkedin from "../../../../assets/banners/linkedin-logo.png";

const HomeSection5pages1 = () => {
  return (
    <div className="min-w-[100%] h-[100vh] flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-center items-center relative">
      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] bg-[#192A36] h-[50%] md:h-[100%] lg:h-[100%] xl:h-[100%] flex flex-col justify-start items-start py-3 md:py-24 lg:py-24 xl:py-24 px-3 md:px-28 lg:px-28 xl:px-28 gap-8">
        <div className="flex w-[100%] flex-col justify-start items-start gap-2">
          <h1 className="text-[22px] md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white w-full text-center md:text-start lg:text-start xl:text-start">
            Guiding You At Every  <br className="hidden md:hidden lg:block xl:block"/> Step!
          </h1>
          <p className="text-white font-light w-full text-center md:text-start lg:text-start xl:text-start">
            Our Top Mentors show you the way, <br className="hidden md:hidden lg:block xl:block"/> to becoming a thorough
            professional!
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-start xl:justify-start items-center gap-x-4  my-0 md:my-8 lg:my-8 xl:my-8">
          <img src={amazon} alt="amazon" className="h-[5vh]" />
          <img src={google} alt="google" className="h-[9vh]" />
          <img src={walmart} alt="walmart" className="h-[5vh]" />
          <img src={microsoft} alt="amazon" className="h-[5vh]" />
          <img src={linkedin} alt="amazon" className="h-[5vh]" />
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
        <div className=" w-[300px] h-[300px] bg-[#398DC8] rounded-full flex flex-col justify-center items-center text-white">
          <div className="text-lg pr-32">“Your </div>
          <span className="text-4xl font-bold">Aspiration </span>
          <div className="text-lg font-bold">
            is our <span className="text-4xl">goal”</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection5pages1;
