import { updatePic } from "./operations/updateProfile"

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://codegyaan.onrender.com";

//authentication endpoints
export const authEndPoints = {
    sendOTP : `${BASE_URL}/auth/sendOTP`,
    login : BASE_URL + "/auth/login",
    signup : `${BASE_URL}/auth/singup`,
    resetPassword : `${BASE_URL}/auth/resetPassword`,
    resetPassToken : `${BASE_URL}/auth/resetPassToken`,
    checkToken : `${BASE_URL}/auth/checkToken`,
}

//cart endpoints
export const cartEndPoints = {
    addToCart : `${BASE_URL}/student/addToCart`,
    removeFromCart : `${BASE_URL}/student/removeFromCart`,
    getCart : `${BASE_URL}/student/getCart`,
}

//user endpoints
export const profileEndPoints = {
    profile : `${BASE_URL}/user/profile`,
    updatePic : `${BASE_URL}/user/updatePic`,
    updatePofile : `${BASE_URL}/user/updateProfile`,
}

//course builder endpoints
export const courseEndpoints = {
    getInstructorCourses : `${BASE_URL}/instructor/getInstructorCourses`,
    getAllCourses : `${BASE_URL}/instructor/getAllCourses`,
    getCourseDetails : `${BASE_URL}/instructor/getCourse`,
    getCompleteCourse : `${BASE_URL}/instructor/getFullCompleteCourse`,
    createCourse : `${BASE_URL}/instructor/createCourse`,
    addSection : `${BASE_URL}/instructor/createSection`,
    addSubSection : `${BASE_URL}/instructor/createSubSection`,
    updateCourse : `${BASE_URL}/instructor/updateCourse`,
    updateSection : `${BASE_URL}/instructor/updateSection`,
    updateSubSection : `${BASE_URL}/instructor/updateSubSection`,
    deleteSection : `${BASE_URL}/instructor/deleteSection`,
    deleteSubSection : `${BASE_URL}/instructor/deleteSubSection`,
    deleteCourse : `${BASE_URL}/instructor/deleteCourse`,
    enrolledCourses : `${BASE_URL}/student/enrolledCourses`,
    markLectureAsComplete : `${BASE_URL}/student/updateCourseProgress`,
    createRating : `${BASE_URL}/student/createRating`,
}

//category endpoints
export const categoryEndpoints = {
    createCategory : `${BASE_URL}/instructor/createCategory`,
    showAllCategories : `${BASE_URL}/instructor/showAllCategories`,
    getCategoryPageDetails : `${BASE_URL}/instructor/getCategoryPageDetails`
}
