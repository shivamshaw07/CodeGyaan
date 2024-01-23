import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import CourseList from "./CourseList";

const NavBar = () => {
  return (
    <div className="h-auto w-[100vw] overflow-x-hidden py-4 flex flex-col gap-4 shadow-md shadow-black">
      <div className="flex justify-between items-center w-[85%] mx-auto">
        <Link to={"/"}>
          {" "}
          <h1 className="text-3xl font-bold text-white flex justify-start items-center">
            <LiaFreeCodeCamp className="text-[44px] mr-1" />
            Code<span className="text-glod-color">Gyaan.</span>
          </h1>
        </Link>
        <div className="w-[50%] flex justify-center items-center  border-black bg-black-bg text-white rounded-xl">
          <IoSearch className="px-3 text-[2.6rem] bg-glod-color rounded-l-xl group hover:bg-[#b99b55] cursor-pointer " />
          <input
            type="text"
            className="w-full allunset h-full border-none rounded-lg px-4"
            placeholder="Search by product title"
          />
        </div>
        <div className="flex bg-[#cbab61] px-5 py-2 rounded hover:bg-[#b99b55] text-white">
          <Link to={"/login"}>
            <div className="text-base hover:cursor-pointer font-medium">
              Login /
            </div>
          </Link>
          <Link to={"/signin"}>
            <div className="text-base hover:cursor-pointer font-medium">
              &nbsp;Signin
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center text-white font-normal text-base w-[85%] mx-auto">
        <Link to={"/"}>
          <div className="flex justify-center items-center">Home</div>
        </Link>
        <div className="flex justify-center items-center group cursor-pointer">
          <span>Courses </span>
          <CourseList /> <FaAngleDown className="ml-1" />{" "}
        </div>
        <div className="flex justify-center items-center">Job Portal</div>
        <Link to={"/aboutus"}>
          <div className="flex justify-center items-center">About Us</div>
        </Link>
        <Link to={"/contact-us"}>
          <div className="flex justify-center items-center">Contact Us</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
