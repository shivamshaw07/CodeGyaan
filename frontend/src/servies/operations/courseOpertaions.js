import { apiConneector } from "../apiConnector";
import { categoryEndpoints, courseEndpoints } from "../api";
import toast from "react-hot-toast";
import { setLoading } from "../../slices/UIslice";

// fetching the available course categories
export const fetchCourseCategories = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    let result = [];
    try {
      const response = await apiConneector(
        "GET",
        categoryEndpoints.showAllCategories
      );
      // console.log("COURSE_CATEGORIES_API API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Course Categories");
      }
      sessionStorage.setItem("category", JSON.stringify(response?.data?.data));
      result = response?.data?.data;
    } catch (error) {
      // console.log("COURSE_CATEGORY_API API ERROR............", error)
      toast.error(error.message);
    }
    dispatch(setLoading(false));
    return result;
  };
};

export const fetchInstructorCourses = async (token) => {
  let result = null;
  try {
    const id = localStorage.getItem("id");
    console.log(id);
    const response = await apiConneector(
      "post",
      courseEndpoints.getInstructorCourses,
      {id,token},
    );
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Details");
    }
    return (result = response?.data?.data);
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error);
    toast.error(error.message);
  }
};

// fetching the course details
export const getFullDetailsOfCourse = async(id) =>{
    let result = null
    try {
        const response = await apiConneector(
            "post",
            courseEndpoints.getCourseDetails,
            {id},
          );
          if (!response?.data?.success) {
            throw new Error("Could Not Fetch Course Details");
          }
          return (result = response?.data?.data);
    } catch (error) {
        console.log("COURSE_DETAILS_API API ERROR............", error);
        toast.error(error.message);
    }
}

// add the course details
export const addCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.createCourse,
      data,
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("CREATE COURSE API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Add Course Details");
    }
    toast.success("Course Details Added Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// edit the course details
export const editCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.updateCourse,
      data,
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("EDIT COURSE API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update Course Details");
    }
    toast.success("Course Details Updated Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("EDIT COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const createSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  console.log(data);
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.addSection,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("CREATE SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Section");
    }
    toast.success("Course Section Created");
    result = response?.data?.courseData;
  } catch (error) {
    console.log("CREATE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// create a subsection
export const createSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.addSubSection,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    // console.log("CREATE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Add Lecture");
    }
    toast.success("Lecture Added");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// update a section
export const updateSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.updateSection,
      ...data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("UPDATE SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update Section");
    }
    toast.success("Course Section Updated");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// update a subsection
export const updateSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.updateSubSection,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("UPDATE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update Lecture");
    }
    toast.success("Lecture Updated");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// delete course
export const deleteCourse = async (data, token) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "Delete",
      courseEndpoints.deleteCourse,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("DELETE COURSE API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course");
    }
  } catch {
    return res.status(200).json({
      success: fasle,
      message: "Course Deleted Unsuccessfully",
    });
  }
  toast.dismiss(toastId);
};

// delete a section
export const deleteSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.deleteSection,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("DELETE SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Section");
    }
    toast.success("Course Section Deleted");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
// delete a subsection
export const deleteSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.deleteSubSection,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("DELETE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Lecture");
    }
    toast.success("Lecture Deleted");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
