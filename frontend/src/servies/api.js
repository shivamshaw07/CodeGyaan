import { updatePic } from "./operations/updateProfile"

const BASE_URL = "http://localhost:3000"

//authentication endpoints
export const authEndPoints = {
    sendOTP : `${BASE_URL}/auth/sendOTP`,
    login : BASE_URL + "/auth/login",
    signup : `${BASE_URL}/auth/singup`,
    resetPassword : `${BASE_URL}/auth/resetPassword`,
    resetPassToken : `${BASE_URL}/auth/resetPassToken`
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
    createCourse : `${BASE_URL}/instructor/createCourse`,
    addSection : `${BASE_URL}/instructor/createSection`,
    addSubSection : `${BASE_URL}/instructor/createSubSection`,
    updateCourse : `${BASE_URL}/instructor/updateCourse`,
    updateSection : `${BASE_URL}/instructor/updateSection`,
    updateSubSection : `${BASE_URL}/instructor/updateSubSection`,
    deleteSection : `${BASE_URL}/instructor/deleteSection`,
    deleteSubSection : `${BASE_URL}/instructor/deleteSubSection`,
    deleteCourse : `${BASE_URL}/instructor/deleteCourse`

}

//category endpoints
export const categoryEndpoints = {
    createCategory : `${BASE_URL}/instructor/createCategory`,
    showAllCategories : `${BASE_URL}/instructor/showAllCategories`,
    getCategoryPageDetails : `${BASE_URL}/instructor/getCategoryPageDetails`
}