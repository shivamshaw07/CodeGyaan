import { Router } from "express";
import { auth, isInstructor } from "../middlewares/auth.js";
import { createCourse } from "../controllers/course.js";
import { createSection, deleteSection, updateSection } from "../controllers/section.js";
import { createSubSection, deleteSubsection, updateSubSection } from "../controllers/subSection.js";
const instructorRoute = Router();

//create course || section || subsection
instructorRoute.post('/createCourse',auth,isInstructor, createCourse);
instructorRoute.post('/createSection',auth,isInstructor,createSection);
instructorRoute.post('/createSubSection',auth,isInstructor,createSubSection);

//update section || subsection
instructorRoute.post('/updateSection',auth,isInstructor,updateSection)
instructorRoute.post('/updateSubSection',auth,isInstructor,updateSubSection)

//delete course || section || subsection
instructorRoute.delete('/deleteSection',auth,isInstructor,deleteSection)
instructorRoute.delete('/deleteSubSection',auth,isInstructor,deleteSubsection)


export default instructorRoute