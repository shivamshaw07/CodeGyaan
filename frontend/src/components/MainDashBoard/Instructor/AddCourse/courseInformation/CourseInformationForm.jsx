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
    };

    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("cousrseStartDate", course.startDate);
      setValue("cousrseMode", course.mode);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }

    getCategories();
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseImage !== course.thumbnail ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString()
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

        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }

        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc);
        }

        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice);
        }

        if (currentValues.startDate !== course.startDate) {
          formData.append("startDate", data.startDate);
        }

        if (currentValues.mode !== course.mode) {
          formData.append("mode", data.mode);
        }

        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags));
        }

        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits);
        }

        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory);
        }

        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          );
        }

        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnailImage", data.courseImage);
        }

        setLoading(true);
        const result = await editCourseDetails(formData, token);
        setLoading(false);
        if (result) {
          setStep(2);
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
    formData.append("courseName", data.courseTitle);
    formData.append("courseDescription", data.courseShortDesc);
    formData.append("price", data.coursePrice);
    formData.append("startDate", data.startDate);
    formData.append("mode", data.mode);
    formData.append("whatYouWillLearn", data.courseBenefits);
    formData.append("category", data.courseCategory);
    formData.append("instructions", JSON.stringify(data.courseRequirements));
    formData.append("status", COURSE_STATUS.DRAFT);
    formData.append("tag", JSON.stringify(data.courseTags));
    formData.append("thumbnailImage", data.courseImage);
    formData.append("token",localStorage.getItem("token"));
    formData.append("id",localStorage.getItem("id"));
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
      className="rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8 w-[60%]"
    >
      <div className="text-white/90 flex flex-col">
        <label htmlFor="courseTitle">
          Course Title<sup className="text-red-500">{" * "}</sup>
        </label>
        <input
          id="courseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
            style={{ borderBottom: "1px solid white" }}
        />
        {errors.courseTitle && <span className="text-red-400 text-xs mt-1">Course Title is Required**</span>}
      </div>

      <div className="text-white/90 flex flex-col gap-2">
        <label htmlFor="courseShortDesc">
          Course Short Description<sup className="text-red-500"> * </sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className=" border-2 h-[20vh] border-white placeholder-gray-100 px-2 py-[10px] rounded-lg bg-white/30 text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}        />
        {errors.courseShortDesc && (
          <span className="text-red-400 text-xs mt-1">Course Description is required**</span>
        )}
      </div>

      <div className="text-white/90 flex flex-col  relative">
        <label htmlFor="coursePrice">
          Course Price<sup className="text-red-500"> *</sup>
        </label>
        <input
          id="coursePrice"
          placeholder="Enter Course Price"
          {...register("coursePrice", {
            required: true,
            valueAsNumber: true,
          })}
          className=" border-2 pl-6 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}          />
        <HiOutlineCurrencyRupee className="absolute top-[55%] left-1 text-richblack-400" />
        {errors.coursePrice && <span className="text-red-400 text-xs mt-1">Course Price is Required**</span>}
      </div>
      <div className="text-white/90 flex flex-col  relative">
        <label htmlFor="cousrseStartDate">
          Course Start Date<sup className="text-red-500"> *</sup>
        </label>
        <input
          id="cousrseStartDate"
          type="date"
          placeholder="Enter Course Start Date"
          {...register("startDate", {
            required: true,
            valueAsNumber: true,
          })}
          className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}          />
        {errors.startDate && <span className="text-red-400 text-xs mt-1">Course Start Date is Required**</span>}
      </div>

      <div className="text-white/90 flex flex-col ">
        <label htmlFor="cousrseMode">
          Course Mode<sup className="text-red-500"> *</sup>
        </label>
        <select
          id="cousrseMode"
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
        <label htmlFor="courseCategory">
          Course Category<sup className="text-red-500"> *</sup>
        </label>
        <select
          id="courseCategory"
          className=" border-2 border-white px-2 py-[10px] rounded-lg bg-blue-bg text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}           defaultValue=""
          {...register("courseCategory", { required: true })}
        >
          <option value="" disabled>
            Choose a Category
          </option>

          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && <span className="text-red-400 text-xs mt-1">Course Category is Required</span>}
      </div>

      {/* create a custom component for handling tags input */}
      <ChipInput
            label="Tags"
            name="courseTags"
            placeholder="Enter Tags and press Enter"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues = {getValues}
      />

      {/* create a component for uploading and showing preview of media */}
      <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />

      {/*     Benefits of the Course */}
      <div className="text-white/90 flex flex-col ">
        <label>
          Benefits of the course<sup  className="text-red-500"> *</sup>
        </label>
        <textarea
          id="coursebenefits"
          placeholder="Enter Benefits of the course"
          {...register("courseBenefits", { required: true })}
          className=" border-2 h-[20vh] border-white px-2  placeholder-slate-50 py-[10px] rounded-lg bg-white/30 text-white transition-all duration-400"
          style={{ borderBottom: "1px solid white" }}           />
        {errors.courseBenefits && (
          <span className="text-red-400 text-xs mt-1">Benefits of the course are required**</span>
        )}
      </div>

      <RequirementField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      <div className="flex gap-x-2">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            className="flex items-center gap-x-2 text-black bg-richblack-300 rounded-md px-3 py-1"
          >
            Continue Without Saving
          </button>
        )}

        <div className="flex text-richblack-900 rounded-md px-3 py-1 font-medium items-center text-md bg-glod-color to-white w-fit">
          <button className="text-white">
            {
              !editCourse?"Next" : "Save Changes"
            }
          </button>
          <MdNavigateNext />
        </div>
      </div>
    </form>
  );
};

export default CourseInformationForm;