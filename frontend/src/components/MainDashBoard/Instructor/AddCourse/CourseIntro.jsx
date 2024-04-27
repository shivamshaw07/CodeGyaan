import React from "react";

const CourseIntro = () => {
  return (
    <div className="w-[60%] border-1 border-black shadow-2xl px-[2vw] py-[4vh] bg-black-bg rounded-lg">
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Course Title<span className="text-red-700 text-lg"> *</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Course Title"
            className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Course Description<span className="text-red-700 text-lg"> *</span>
          </label>
          <textarea
            type="text"
            id="name"
            placeholder="Enter Course Description"
            className=" border-2 h-[20vh] border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Course Price<span className="text-red-700 text-lg"> *</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Course Price"
            className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Course Title<span className="text-red-700 text-lg"> *</span>
          </label>
          <select
            type="text"
            id="name"
            placeholder="Enter Course Title"
            className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          >
            <option >
              Blockchain
            </option>
            <option >
              Android
            </option>
            <option >
              AI
            </option>
            <option >
              Web Dev
            </option>
            <option >
              DevOps
            </option>
            <option >
              C++, Java, Python
            </option>
            <option >
              ML
            </option>
            </select>
        </div>
      </form>
    </div>
  );
};

export default CourseIntro;
