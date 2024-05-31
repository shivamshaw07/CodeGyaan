import { Router } from "express";
import { auth, isStudent } from "../middlewares/auth.js";
import { getEnrolledCourses } from "../controllers/course.js";
import { updateCourseProgress } from "../controllers/courseProgress.js";
// import {createRating,getAverageRating,getAllRating} from '../controllers/ratingAndReview.js';

const studentRoute  = Router();

studentRoute.get("/enrolledCourses/:id",auth,isStudent,getEnrolledCourses)
studentRoute.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

// //rating and review
// studentRoute.post("/createRating", auth, isStudent, createRating)
// studentRoute.get("/getAverageRating", getAverageRating)
// studentRoute.get("/getReviews", getAllRating)



export default studentRoute