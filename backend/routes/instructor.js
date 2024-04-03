import { Router } from "express";
import { auth, isInstructor } from "../middlewares/auth.js";
import { createCourse } from "../controllers/course.js";
import multer from "multer";
const instructorRoute = Router();

//create course
instructorRoute.post('/createCourse',auth,isInstructor, createCourse);

export default instructorRoute