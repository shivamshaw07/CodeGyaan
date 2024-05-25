import React, { useState } from "react";
import { FaShare } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { RiFolderVideoFill } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import {Link} from 'react-router-dom'
import { getFullDetailsOfCourse } from "../../../servies/operations/courseOpertaions";
const CourseCard = ({
  img,
  title,
  instructor,
  date,
  features,
  original_price,
  discounted_price,
  discount_percentage,
  id
}) => {

  const [copied,setCopied] = useState(false)

  const check = async() =>{
    const courseDetail = await getFullDetailsOfCourse(id);
    console.log(courseDetail);
  }

  
  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link)
    .then(() => {
      setCopied(true)
      setTimeout(()=>{
        setCopied(false)
      },1500)
    })
    .catch(err => console.error("Could not copy text: ", err));
  }

  return (
    <div className="realative min-w-full max-w-[220px] md:min-w-[350px] lg:min-w-[350px] xl:min-w-[350px] flex flex-col justify-start items-start bg-black-bg rounded-2xl border-[1px] border-blue-bg shadow-md shadow-black gap-3">
      <img
        src={img}
        alt={img}
        className="w-full h-[180px] rounded-t-2xl overflow-y-hidden"
      />
      <div className=" flex flex-col justify-start items-start px-3 text-white/80 w-full gap-1">
        <div className="relative flex justify-between items-center w-full">
          <div className="text-xl text-white font-bold">{title}</div>
          <div className="text-glod-color hover:cursor-pointer">
            <FaShare onClick={()=>copyToClipboard(`http://localhost:5173/course/${title}+/${id}`)} />
            {copied && <div className="absolute bottom-8 rounded-2xl -right-7 bg-glod-color text-white px-3 py-[1px] border-2 border-white">{"Copied"}</div>}
          </div>
        </div>
        <div className="flex justify-start items-center w-full gap-3">
          <div>
            <FaChalkboardTeacher />
          </div>
          <div>{instructor}</div>
        </div>
        <div className="flex justify-start items-center w-full gap-3">
          <div>
            <GrSchedules />
          </div>
          <div>{date}</div>
        </div>
        <div className="flex justify-start items-center w-full gap-3">
          <div>
            <RiFolderVideoFill />
          </div>
          <div className="line-clamp-1">{features}</div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-baseline px-3 border-t-[1px] w-full mt-16 ">
        <div className="flex justify-start items-center gap-6 pt-2">
          <div className="text-white text-xl">₹ {discounted_price}</div>
          <div className="text-white/60 strike line-through text-sm -ml-5">
            {original_price}
          </div>
          <div className="flex justify-center items-center text-green-500 text-[.9rem] font-medium gap-1">
            <div>
              <TbDiscount2 className="text-2xl"/>
            </div>
            <div>{discount_percentage} Discount</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <Link to={'/course/'+title+'/'+id} className="w-[50%]">
          <button className="py-3 bg-glod-color w-full rounded-es-lg text-white hover:bg-[#b99b55]" style={{ WebkitTextStroke: ".2px #000" }}>
            Explore
          </button>
        </Link>
        <button className="py-3 text-[#cbab61] w-[50%]">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
