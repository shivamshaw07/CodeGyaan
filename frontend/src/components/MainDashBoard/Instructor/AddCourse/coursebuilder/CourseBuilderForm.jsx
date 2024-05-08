import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import {
  createSection,
  updateSection,
} from "../../../../../servies/operations/courseOpertaions.js";
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../slices/courseSlice.js";
import NestedView from "./NestedView";
import IconBtn from "../../../../common/IconBtn.jsx";

export default function CourseBuilderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [editSectionName, setEditSectionName] = useState(null);
  const dispatch = useDispatch();


  // handle form submission
  const onSubmit = async (data) => {
    // console.log(data)
    setLoading(true);

    let result;

    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
          id : localStorage.getItem("id")
        },
        token
      );
      // console.log("edit", result)
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
          id: localStorage.getItem("id")
        },
        token
      );
      // toast.error("Please add atleast one section");
    }
    if (result) {
      // console.log("section result", result)
      dispatch(setCourse(result));
      //console.log("here it is->",result);
      setEditSectionName(null);
      setValue("sectionName", "");
    }
    setLoading(false);
  };

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      cancelEdit();
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName", sectionName);
  };

  const goToNext = () => {
    if (course.courseContent.length === 0) {
      toast.error("Please add atleast one section");
      return;
    }
    if (
      course.courseContent.some((section) => section.subSection.length === 0)
    ) {
      toast.error("Please add atleast one lecture in each section");
      return;
    }
    dispatch(setStep(3));
  };

  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  };

  return (
    <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6  mb-4">
      <p className="text-2xl font-semibold text-glod-color">
        Course <span className="text-white">Builder.</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-white" htmlFor="sectionName">
            Section Name <sup className="text-red-500">*</sup>
          </label>
          <input
            id="sectionName"
            disabled={loading}
            placeholder="Add a section to build your course"
            {...register("sectionName", { required: true })}
            className="form-style w-[80% rounded-md px-3 py-2 text-white"
            style={{ borderBottom: ".1px solid white" }}
          />
          {errors.sectionName && (
            <span className="ml-2 text-xs tracking-wide text-red-500">
              ** Section name is required **
            </span>
          )}
        </div>
        <div className="flex items-end gap-x-4">
          <IconBtn
            type="Submit"
            disabled={loading}
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
          >
            <IoAddCircleOutline size={20} className="text-yellow-50" />
          </IconBtn>
          {/* <div className="flex items-center gap-x-1 text-white">
            <button type="Submit">
              {editSectionName ? "Edit Section Name" : "Create Section"}
            </button>
            <IoAddCircleOutline size={20} className="text-yellow-50" />
          </div> */}
          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm text-white underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
      {course.courseContent.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )}
      {/* Next Prev Button */}
      <div className="flex justify-end gap-x-3 ">
        <button onClick={goBack} 
          className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-white py-[8px] px-[20px] font-semibold text-black`}
        >
          Back
        </button>
        {/* <IconBtn disabled={loading} text="Next" onclick={goToNext}>
          <MdNavigateNext />
        </IconBtn> */}
        <button
          className=" flex items-center bg-glod-color text-white rounded-md px-3 py-1 font-semibold"
          onClick={goToNext}
        >
          Next
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
}
