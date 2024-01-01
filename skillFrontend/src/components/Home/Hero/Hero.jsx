import React from "react";
import Typewriter from "typewriter-effect";
import heroImg from "../../../assets/hero-bg.png";

const Hero = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden z-10">
      {/* left part of hero section */}
      <div className=" w-[83%] mx-auto py-10 flex justify-center items-center gap-[10vw]">
        <div className="flex flex-col justify-start items-start w-auto gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex justify-start items-start text-4xl font-bold gap-3">
              <span className="text-white">Upscaling Made </span>
              <span className="flex justify-center items-center text-[#cbab61]">
                {"<"}
                <Typewriter
                  options={{
                    strings: ["Practical", "Easy", "Affordable"],
                    autoStart: true,
                    loop: true,
                  }}
                />
                {">"}
              </span>
            </div>
            <div className=" text-white text-4xl font-bold">With Skill Safari</div>
          </div>
          <p className="text-white font-light text-lg">
            Skill Safari is your one-stop-shop for upscaling. Get maximum value for
            time and resources you invest, with job-ready courses &
            high-technology, available at the lowest cost.
          </p>
          <button className="bg-[#cbab61] text-xl font-semibold px-5 py-3 rounded-md hover:scale-95 transition-all text-white duration-200">
            Explore courses
          </button>
        </div>
        <div className="w-[90%]">
          <img src={heroImg} alt="heroImg" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
