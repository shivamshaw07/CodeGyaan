import { instance } from "../config/razorpay.js";
import Course from '../models/course.js'
import user from "../models/user.js";
import mailSender from "../utils/mailSender.js";


export const capturePayment = async (req,res) =>{
    //getcourseId and userId
    const {course_id} = req.body
    const userId = req.user.id

    //validation
    if(!course_id){
        return res.status(404).json({
            success:false,
            message:"course id not found"
        })
    };

    //valid course details
    let course;
    try {
        course = await course.findById(course_id)
        if(!course){
            return res.status(404).json({
                success:false,
                message:"course not found"
            })
        }

        //user already payed for the same course
        


    } catch (error) {
        
    }
}