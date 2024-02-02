import React from "react";
import founding from "../../assets/aboutus/FoundingStory.84f2828a5f4a9c08a802.png";

const FoundingStory = () => {
  return (
    <div className="max-w-[100vw]  h-auto py-[10vh] border-y\t-[1px] border-white">
      <div className="w-[85vw] mx-auto ">
        <div className="flex justify-between items-center gap-[5vw]">
          <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="text-4xl text-white font-semibold">
              Our Founding <span className="text-glod-color">Story</span>.
            </h1>
            <p className="text-white/80 font-light">
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
            <p className="text-white/80 font-light">
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
            </p>
          </div>
          <img src={founding} alt="founding" className="shadow-xl shadow-black"/>
        </div>
        <div className=" flex justify-between items-start gap-[5vw] pt-[15vh]">
            <div>
                <h1 className="text-4xl text-white font-semibold">Our <span className="text-glod-color">Vision</span>.</h1>
                <p className="text-white/80 font-light mt-[4vh]">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
            </div>
            <div>
                <h1 className="text-4xl text-white font-semibold">Our <span className="text-glod-color">Mision</span>.</h1>
                <p className="text-white/80 font-light mt-[4vh]">Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingStory;
