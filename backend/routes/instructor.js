import { Router } from "express";
import { auth, isAdmin, isInstructor } from "../middlewares/auth.js";
import { courseDetails, createCourse, deleteCourse, editCourse, fetchInstructorCourses, getAllCourses, getFullCompleteCourse } from "../controllers/course.js";
import { createSection, deleteSection, updateSection } from "../controllers/section.js";
import { createSubSection, deleteSubsection, updateSubSection } from "../controllers/subSection.js";
import { categoryPageDetails, createCategory, showAllCategories } from "../controllers/category.js";
const instructorRoute = Router();

//create course || section || subsection
instructorRoute.post('/createCourse',auth,isInstructor, createCourse);
instructorRoute.post('/createSection',auth,isInstructor,createSection);
instructorRoute.post('/createSubSection',auth,isInstructor,createSubSection);

//update section || subsection
instructorRoute.post('/updateCourse',auth,isInstructor,editCourse)
instructorRoute.post('/updateSection',auth,isInstructor,updateSection)
instructorRoute.post('/updateSubSection',auth,isInstructor,updateSubSection)

//delete course || section || subsection
instructorRoute.delete('/deleteSection',auth,isInstructor,deleteSection)
instructorRoute.delete('/deleteSubSection',auth,isInstructor,deleteSubsection)
instructorRoute.delete('/deleteCourse',auth,isInstructor,deleteCourse)

//get courses details
instructorRoute.get('/getAllCourses',getAllCourses)
instructorRoute.get('/getCourse/:id',courseDetails)
instructorRoute.post('/getFullCompleteCourse',auth,getFullCompleteCourse)
instructorRoute.post('/getInstructorCourses',auth,isInstructor,fetchInstructorCourses)

//course category
// instructorRoute.post("/createCategory", auth, isAdmin, createCategory)
instructorRoute.get("/showAllCategories", showAllCategories)
// instructorRoute.post("/getCategoryPageDetails", categoryPageDetails)

export default instructorRoute