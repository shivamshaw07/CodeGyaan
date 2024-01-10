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
    <div className="w-full h-[100vh] flex justify-center items-center relative">
      <div className="w-[50%] bg-[#192A36] h-full flex flex-col justify-start items-start py-24 px-28 gap-8">
        <div className="flex flex-col justify-start items-start gap-2">
          <h1 className="text-4xl font-bold text-white">
            Guiding You At Every <br /> Step!
          </h1>
          <p className="text-white font-light">
            Our Top Mentors show you the way, <br /> to becoming a thorough
            professional!
          </p>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-x-4 gap-y-5 my-8">
          <img src={amazon} alt="amazon" className="h-[5vh]" />
          <img src={google} alt="google" className="h-[5vh]" />
          <img src={walmart} alt="walmart" className="h-[5vh]" />
          <img src={microsoft} alt="amazon" className="h-[5vh]" />
          <img src={linkedin} alt="amazon" className="h-[5vh]" />
        </div>
        <button className=" bg-white px-4 py-2 rounded ">
          <span className="mr-1 font-light">Explore</span>
          <span>
            <FaArrowRight className="inline" />
          </span>
        </button>
        <button className="rounded text-white">
          <span className="mr-1 font-light">Skip</span>
          <span>
            <FaArrowRight className="inline" />
          </span>
        </button>
      </div>
      <div className="w-[50%] h-full">
        <img src={banner1} alt="banner1" className="w-full h-full" />
      </div>
      <div className="absolute w-[300px] h-[300px] bg-[#398DC8] rounded-full flex flex-col justify-center items-center text-white">
        <div className="text-lg pr-32">“Your </div>
        <span className="text-4xl font-bold">Aspiration </span>
        <div className="text-lg font-bold">
          is our <span className="text-4xl">goal”</span>
        </div>
      </div>
    </div>
  );
};

export default HomeSection5pages1;
