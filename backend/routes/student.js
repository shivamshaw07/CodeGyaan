import { Router } from "express";
import { auth, isStudent } from "../middlewares/auth.js";
import { getEnrolledCourses } from "../controllers/course.js";
import { updateCourseProgress } from "../controllers/courseProgress.js";
import { addToCart, getCart, removeFromCart } from "../controllers/cart.js";
import {createRating,getAverageRating,getAllRating} from '../controllers/ratingAndReview.js';

const studentRoute  = Router();

studentRoute.get("/enrolledCourses/:id",auth,isStudent,getEnrolledCourses)
studentRoute.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);
studentRoute.post("/addToCart",auth, isStudent, addToCart);
studentRoute.delete("/removeFromCart",auth, isStudent, removeFromCart);
studentRoute.get('/getCart/:id',auth, isStudent, getCart)

//rating and review
studentRoute.post("/createRating", auth, isStudent, createRating)
studentRoute.get("/getAverageRating", getAverageRating)
studentRoute.get("/getReviews", getAllRating)



export default studentRoute