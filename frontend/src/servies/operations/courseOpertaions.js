import { apiConneector } from "../apiConnector";
import { categoryEndpoints, courseEndpoints } from "../api";
import toast from "react-hot-toast";
import { setLoading } from "../../slices/UIslice";
import rootReducer from "../../reducer";
import { logout } from "./authOpertaion";
import store from "../../main";
import useNavigateHelper from "../../utils/coustomHooks/useNavigateHelper";

// fetching the available course categories
export const fetchCourseCategories = async() => {
  
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
    return result;
  
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
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
  }
};

// fetching the course details
export const getFullDetailsOfCourse = async(id) =>{
  
    let result = null
    let url = `${courseEndpoints.getCourseDetails}/${id}`
    try {
        const response = await apiConneector(
            "get",
            url
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

// get full details of a course
export const getFullCompleteCourse = async (courseId, token) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConneector(
      "POST",
      courseEndpoints.getCompleteCourse,
      {
        courseId,
        userId: localStorage.getItem("id"),
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )
    // console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response)
    
    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
  } catch (error) {
    console.log("COURSE_FULL_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}


//fetch all couses
export const getAllCourses = async () => {
  let result = null;
  try {
    const allCourse = await apiConneector(
      "GET",
      courseEndpoints.getAllCourses
    )
    if(!allCourse?.data?.success){
      throw new Error("Could Not Fetch Course Details");
    }
    return(result = allCourse?.data?.data)
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error);
  }
  return result
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
    sessionStorage.setItem("allCourses",JSON.stringify(response?.data?.data));
  } catch (error) {
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
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
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
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
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
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
    console.log("CREATE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Add Lecture");
    }
    toast.success("Lecture Added");
    result = response?.data?.data;
  } catch (error) {
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
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
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
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
        authorization: `Bearer ${token}`,
      }
    );
    console.log("UPDATE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update Lecture");
    }
    toast.success("Lecture Updated");
    result = response?.data?.data;
  } catch (error) {
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
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
      {id:localStorage.getItem("id"),courseId : data.courseId},
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("DELETE COURSE API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course");
    }
    else{
      toast.success("Course Deleted");
    }
  } catch (error){
    toast.error("Could Not Delete Course");
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
  }
  toast.dismiss(toastId);
};

// delete a section
export const deleteSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConneector(
      "delete",
      courseEndpoints.deleteSection,
      {id:localStorage.getItem("id"), ...data},
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
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
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
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};


// mark a lecture as complete
export const markLectureAsComplete = async (data, token) => {
  let result = null
  console.log("mark complete data", data)
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConneector("POST", courseEndpoints.markLectureAsComplete, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log(
      "MARK_LECTURE_AS_COMPLETE_API API RESPONSE............",
      response
    )

    if (!response.data.message) {
      throw new Error(response.data.error)
    }
    toast.success("Lecture Completed")
    result = true
  } catch (error) {
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
    toast.error(error.message)
    result = false
  }
  toast.dismiss(toastId)
  return result
}

// create a rating for course
export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...")
  // console.log("create rating data", data);
  let success = false
  try {
    const response = await apiConneector("POST", courseEndpoints.createRating, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE RATING API RESPONSE............", response)
    if (!response?.data?.success) {
      toast.error(response?.data?.message)
      throw new Error("Could Not Create Rating")
    }
    toast.success("Rating Created")
    success = true
  } catch (error) {
    success = false
    if(error?.response?.data?.message === "Token is invalid"){
      useNavigateHelper("/login");
      // store.dispatch(logout());
    }
    toast.error(error?.response?.data?.message || error.message)
  }
  toast.dismiss(toastId)
  return success
}