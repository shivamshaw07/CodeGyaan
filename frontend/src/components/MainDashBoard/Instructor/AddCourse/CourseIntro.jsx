import React from "react";
import Upload from "./Upload";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";



const CourseIntro = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const { course, editCourse } = useSelector((state) => state.course);
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
            htmlFor="price"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Course Price<span className="text-red-700 text-lg"> *</span>
          </label>
          <input
            type="text"
            id="price"
            placeholder="Enter Course Price"
            className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          />
        </div>
        
        <div className="flex flex-col">
          <label
            htmlFor="date"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Start Date<span className="text-red-700 text-lg"> *</span>
          </label>
          <input
            type="date"
            id="date"
            placeholder="Enter Course Price"
            className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="mode"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Mode<span className="text-red-700 text-lg"> *</span>
          </label>
          <select
            type="text"
            id="mode"
            placeholder="Enter Course Title"
            className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          >
            <option >
              Live
            </option>
            <option >
              Hybrid
            </option>
            
            </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Course Category<span className="text-red-700 text-lg"> *</span>
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
        <div className="flex flex-col">
          <label
            htmlFor="tags"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Course Tags<span className="text-red-700 text-lg"> *</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Course Price"
            className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          />
        </div>
        <Upload
           name="courseImage"
           label="Course Thumbnail"
           register={register}
           setValue={setValue}
           errors={errors}
           editData={editCourse ? course?.thumbnail : null}
        />
        <div className="flex flex-col">
          <label
            htmlFor="Benefits"
            className="text-sm text-white/80 font-semibold transition-all duration-400"
          >
            Course Benefits<span className="text-red-700 text-lg"> *</span>
          </label>
          <textarea
            type="text"
            id="name"
            placeholder="Enter Course Benefits"
            className=" border-2 h-[20vh] border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
          />
        </div>
        <button type="submit" className="w-[100px] py-2 rounded-lg text-white tex font-bold bg-glod-color">
          Next {">"}
        </button>
      </form>
    </div>
  );
};

export default CourseIntro;
