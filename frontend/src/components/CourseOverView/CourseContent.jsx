import React, { useEffect, useState } from "react";
import { TECollapse } from "tw-elements-react";
import { IoVideocamSharp } from "react-icons/io5";

export default function AccordionBasicExample({content,author}) {
  const [activeElement, setActiveElement] = useState("");
  const [lec, setLec] = useState(0);

  useEffect(() => {
    if (content) {
      for(let i=0;i<content.length;i++){
        if(content[i].subSection){
          setLec(lec+content[i].subSection.length)
        }
      }
    }
  },[content])
  
  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div className="my-12 w-full flex flex-col justify-start gap-2">
      <h1 className="text-3xl font-bold text-white">
        Course <span className="text-glod-color">Content</span>.
      </h1>
      <h2 className="text-sm font-semibold text-white mt-2">{content ? content.length : 0} Sections and {lec} Lectures</h2>
      <div className="w-full">
        {
          content?.map((section, index) => (
            
        <div key={index} className="w-full">
          <div className="rounded-t-lg border-black border-2 bg-black-bg">
            <h2 className="mb-0" id="headingOne">
              <button
                className={`${
                  activeElement === "element1" &&
                  `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-black-bg px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  dark:text-white`}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span className="text-xl">{section?.sectionName}</span>
                <span className="ml-4 text-glod-color">{section?.subSection.length} Lecture(s)</span>
                <span
                  className={`${
                    activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            {
              section?.subSection.map((sub)=>(
              <TECollapse
                key={sub?._id}
                show={activeElement === "element1"}
                className="!mt-0 !rounded-b-none !shadow-none p-5 "
              >
                <div className="flex justify-start items-center gap-2 text-white/80 text-lg">
                <IoVideocamSharp className="mt-1"/>
                  <span>{sub?.title}</span>
                </div>
              </TECollapse>
              ))
            }
            
          </div>
        </div>
          ))
        }
        
      </div>
      <h1 className="text-4xl font-bold text-white">Author</h1>
      <div className="flex justify-start items-center gap-2">
        <img src={author?.image} alt="img" className="h-[60px] rounded-full" />
        <div className="text-white font-semibold text-3xl">{author?.firstName + " " + author?.lastName}</div>
      </div>
    </div>
  );
}
