import React from "react";
import Typewriter from "typewriter-effect";
import heroImg from "../../../assets/hero-bg.png";

const Hero = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden z-10">
      {/* left part of hero section */}
      <div className=" w-[85%] mx-auto py-10 flex justify-center items-center gap-[10vw]">
        <div className="flex flex-col justify-start items-start w-auto gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex justify-start items-start text-4xl font-bold gap-3">
              <span className="text-white">Upscaling Made </span>
              <span className="flex justify-center items-center text-glod-color">
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
            <div className=" text-white text-4xl font-bold">With Code<span className="text-glod-color">Gyaan.</span></div>
          </div>
          <p className="text-white font-light text-lg">
            Code Gyaan is your one-stop-shop for upscaling. Get maximum value for
            time and resources you invest, with job-ready courses &
            high-technology, available at the lowest cost.
          </p>
          <button className="bg-glod-color text-xl font-semibold px-5 py-3 rounded hover:bg-[#b99b55] text-white">
            Explore courses
          </button>
        </div>
        <div className="w-[87%]">
          <img src={heroImg} alt="heroImg" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
