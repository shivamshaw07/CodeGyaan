import React from "react";
import HomeSection5pages1 from "./HomeSection5pages/HomeSection5pages1";
import HomeSection5pages2 from "./HomeSection5pages/HomeSection5pages2";
import HomeSection5pages3 from "./HomeSection5pages/HomeSection5pages3";
import HomeSection5pages4 from "./HomeSection5pages/HomeSection5pages4";

const HomeSection5 = () => {
  return (
    <>
      {/* <div className="w-full h-full block md:hidden xl:hidden lg:hidden">
        <div className="max-w-[100%] h-full flex overflow-x-scroll ">
          <HomeSection5pages1 />
          <HomeSection5pages2 />
          <HomeSection5pages3 />
          <HomeSection5pages4 />
        </div>
      </div>
      <div className="w-full h-full hidden md:block xl:block lg:block">
      </div> */}
        <HomeSection5pages1 />
        <HomeSection5pages2 />
        <HomeSection5pages3 />
        <HomeSection5pages4 />
    </>
  );
};

export default HomeSection5;
