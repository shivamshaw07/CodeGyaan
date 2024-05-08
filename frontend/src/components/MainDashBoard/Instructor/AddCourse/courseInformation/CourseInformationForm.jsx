import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MdNavigateNext } from "react-icons/md"
import IconBtn from "../../../../common/IconBtn"
import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../servies/operations/courseOpertaions.js";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RequirementField from "./RequirementField";
import { setStep, setCourse } from "../../../../../slices/courseSlice.js";
import { COURSE_STATUS } from "../../../../../utils/constant.js";
import { toast } from "react-hot-toast";
import ChipInput from "./ChipInput";
import Upload from "../Upload";

const CourseInformationForm = () => {

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    
    const getCategories = async () => {
      setLoading(true);
       const categories = await dispatch(fetchCourseCategories());
      if (categories.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
      console.log(course);
    };

    if (editCourse) {
      setValue("courseName", course.courseName);
      setValue("courseDescription", course.courseDescription);
      setValue("price", course.price);
      setValue("startDate", course.startDate);
      setValue("mode", course.mode);
      setValue("tag", course.tag);
      setValue("whatYouWillLearn", course.whatYouWillLearn);
      setValue("category", course.category);
      setValue("instruction", course.instruction);
      setValue("thumbnail", course.thumbnail);
    }
    if(!sessionStorage.getItem('category')) getCategories();
    else setCourseCategories( JSON.parse(sessionStorage.getItem('category')))
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseName !== course.courseName ||
      currentValues.courseDescription !== course.courseDescription ||
      currentValues.price !== course.price ||
      currentValues.tag.toString() !== course.tag.toString() ||
      currentValues.whatYouWillLearn !== course.whatYouWillLearn ||
      currentValues.category._id !== course.category._id ||
      currentValues.thumbnail !== course.thumbnail ||
      currentValues.instruction.toString() !==
        course.instruction.toString()
    )
      return true;
    else return false;
  };

  //handles next button click
  const onSubmit = async (data) => {
    if (editCourse) {
      if (isFormUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();
        formData.append("id", localStorage.getItem("id"));

        formData.append("courseId", course._id);
        if (currentValues.courseName !== course.courseName) {
          formData.append("courseName", data.courseName);
        }

        if (currentValues.courseDescription !== course.courseDescription) {
          formData.append("courseDescription", data.courseDescription);
        }

        if (currentValues.price !== course.price) {
          formData.append("price", data.price);
        }

        if (currentValues.startDate !== course.startDate) {
          formData.append("startDate", data.startDate);
        }

        if (currentValues.mode !== course.mode) {
          formData.append("mode", data.mode);
        }

        if (currentValues.tag.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.tag));
        }

        if (currentValues.whatYouWillLearn !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.whatYouWillLearn);
        }

        if (currentValues.category._id !== course.category._id) {
          formData.append("category", data.category);
        }

        if (
          currentValues.instruction.toString() !==
          course.instruction.toString()
        ) {
          formData.append(
            "instruction",
            JSON.stringify(data.instruction)
          );
        }

        if (currentValues.thumbnail !== course.thumbnail) {
          formData.append("thumbnail", data.thumbnail);
        }
        

        setLoading(true);
        const result = await editCourseDetails(formData, token);
        setLoading(false);
        if (result) {
          dispatch(setStep(2));
          dispatch(setCourse(result));
        }
      } else {
        toast.error("NO Changes made so far");
      }
      // console.log("PRINTING FORMDATA", formData);
      // console.log("PRINTING result", result);

      return;
    }

    //create a new course
    const formData = new FormData();
    formData.append("courseName", data.courseName);
    formData.append("courseDescription", data.courseDescription);
    formData.append("price", data.price);
    formData.append("startDate", data.startDate);
    formData.append("mode", data.mode);
    formData.append("whatYouWillLearn", data.whatYouWillLearn);
    formData.append("category", data.category);
    formData.append("instruction", [...data.instruction]);
    formData.append("status", COURSE_STATUS.DRAFT);
    formData.append("tag", [...data.tag]);
    formData.append("thumbnail", data.thumbnail);
    formData.append("token",localStorage.getItem("token"));
    formData.append("id", localStorage.getItem("id"));
    setLoading(true);
    // console.log("BEFORE add course API call");
    // console.log("PRINTING FORMDATAiii", formData);

    const result = await addCourseDetails(formData, token);
    if (result) { 
      //console.log(setCourse(result));
      dispatch(setStep(2));
      dispatch(setCourse(result));
    }
    setLoading(false);
    // console.log("PRINTING FORMDATAAAA", formData);
    // console.log("PRINTING result", result);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border-richblack-700 bg-richblack-800 p-6 space-y-8 w-full shadow-2xl"
    >
      <div className="text-white/90 flex flex-col">
        <label htmlFor="courseTitle">
          Course Title<sup className="text-red-500">{" * "}</sup>
        </label>
        <input
          id="courseName"
          placeholder="Enter Course Title"
          {...register("courseName", { required: true })}
          className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
        />
        {errors.courseName && <span className="text-red-400 text-xs mt-1">Course Title is Required**</span>}
      </div>

      <div className="text-white/90 flex flex-col gap-2">
        <label htmlFor="courseDescription">
          Course Short Description<sup className="text-red-500"> * </sup>
        </label>
        <textarea
          id="courseDescription"
          placeholder="Enter Description"
          {...register("courseDescription", { required: true })}
          className=" border-2 h-[20vh] border-white placeholder-gray-100 px-2 py-[10px] rounded-lg bg-white/30 text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}        />
        {errors.courseDescription && (
          <span className="text-red-400 text-xs mt-1">Course Description is required**</span>
        )}
      </div>

      <div className="text-white/90 flex flex-col  relative">
        <label htmlFor="price">
          Course Price<sup className="text-red-500"> *</sup>
        </label>
        <input
          id="price"
          placeholder="Enter Course Price"
          {...register("price", {
            required: true,
            valueAsNumber: true,
          })}
          className=" border-2 pl-6 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}          />
        <HiOutlineCurrencyRupee className="absolute top-[55%] left-1 text-richblack-400" />
        {errors.price && <span className="text-red-400 text-xs mt-1">Course Price is Required**</span>}
      </div>
      <div className="text-white/90 flex flex-col  relative">
        <label htmlFor="startDate">
          Course Start Date<sup className="text-red-500"> *</sup>
        </label>
        <input
          id="startDate"
          type="date"
          placeholder="Enter Course Start Date"
          {...register("startDate", {
            required: true,
          })}
          className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}          />
        {errors.startDate && <span className="text-red-400 text-xs mt-1">Course Start Date is Required**</span>}
      </div>

      <div className="text-white/90 flex flex-col ">
        <label htmlFor="mode">
          Course Mode<sup className="text-red-500"> *</sup>
        </label>
        <select
          id="mode"
          className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}           defaultValue=""
          {...register("mode", { required: true })}
        >
          <option value="" disabled>
            Choose a mode
          </option>

          
            
              <option>
                Hybrid
              </option>
              <option>
                Online
              </option>
        </select>
        {errors.mode && <span className="text-red-400 text-xs mt-1">Course Mode is Required</span>}
      </div>
      <div className="text-white/90 flex flex-col ">
        <label htmlFor="category">
          Course Category<sup className="text-red-500"> *</sup>
        </label>
        <select
          id="category"
          className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}           defaultValue=""
          {...register("category", { required: true })}
        >
          <option value="" disabled>
            Choose a Category
          </option>

          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category?._id} >
                {category?.name}
              </option>
            ))}
        </select>
        {errors.category && <span className="text-red-400 text-xs mt-1">Course Category is Required</span>}
      </div>

      {/* create a custom component for handling tags input */}
      <ChipInput
            label="tag"
            name="tag"
            placeholder="Enter Tags and press Enter"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues = {getValues}
      />

      {/* create a component for uploading and showing preview of media */}
      <Upload
        name="thumbnail"
        label="thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />

      {/*     Benefits of the Course */}
      <div className="text-white/90 flex flex-col ">
        <label htmlFor="whatYouWillLearn">
          Benefits of the course<sup  className="text-red-500"> *</sup>
        </label>
        <textarea
          id="whatYouWillLearn"
          placeholder="Enter Benefits of the course"
          {...register("whatYouWillLearn", { required: true })}
          className=" border-2 h-[20vh] border-white px-2  placeholder-slate-50 py-[10px] rounded-lg bg-white/30 text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}           />
        {errors.whatYouWillLearn && (
          <span className="text-red-400 text-xs mt-1">Benefits of the course are required**</span>
        )}
      </div>

      <RequirementField
        name="instruction"
        label="instruction"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      <div className="flex gap-x-2">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            className="flex items-center gap-x-2 text-white rounded-md px-3 py-1"
          >
            Continue Without Saving
          </button>
        )}

        <button type="submit" className="cursor-pointer text-white flex juxtify-center items-center bg-richblack-300 rounded-md px-3 py-1 font-medium text-md bg-glod-color to-white w-fit">
          
            {
              !editCourse? "Next" : "Save Changes"
            }
          
          <MdNavigateNext />
        </button>
      </div>
    </form>
  );
};

export default CourseInformationForm;