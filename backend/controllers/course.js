import user from "../models/user.js";
import Tag from "../models/tag.js";
import { uploadImageToCloudinary } from "../utils/imageUploader.js";
import { config as configDotenv } from "dotenv";
import course from "../models/course.js";
configDotenv();

export const createCourse = async (req,res) =>{
    try {
        const {courseName,courseDescription,whatYouWillLearn,prize,tag,startDate,mode} = req.body
        const thumbnailrec = req.files.thumbnailimg  
        //validate the datas
        if(!courseName || !courseDescription || !whatYouWillLearn || !prize || !thumbnailrec || !tag ||!startDate || !mode){
            return res.status(500).json({
                status:false,
                message : "All field are mandatory"
            })
        }
    
        //check for instructor
        const userId = req.body.id
        const instructorDetails = await user.findById(userId)
    
        if(!instructorDetails && instructorDetails.accountType !== "Instructor"){
            return res.status(404).json({
                status:false,
                message : "Instructor details not found"
            })
        }
    
        //validate tag
        // const tagDetails = await Tag.findById(tag)
        // if(!tagDetails){
        //     return res.status(404).json({
        //         status:false,
        //         message : "Tag details not found"
        //     })
        // }
    
        //upload image to cloudinary
        const thumbNailImage = await uploadImageToCloudinary(thumbnailrec,process.env.FOLDER_NAME)
        //create new course
        const newCourse = await course.create({
            instructor:instructorDetails._id,
            courseName,
            whatYouWillLearn:whatYouWillLearn,
            courseDescription:courseDescription,
            prize:prize,
            tag:tag,
            thumbnail : thumbNailImage.secure_url,
            startDate:startDate,
            mode:mode
        })
        console.log(newCourse);
    
        //update couse section of user
        await user.findByIdAndUpdate(
            {_id:instructorDetails._id},
            {courses:newCourse._id},
            {new:true} 
        )
    
        //update tag schema
    
        return res.status(200).json({
            success : true,
            message : "Course created successfully",
            data:newCourse
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Course created Unsuccessfully",
            
        })
    }
} 


export const getAllCourses = async (req,res) => {
    try {
        const allCourses = await course.find({},
            {
                instructor:true,
                courseName:true,
                thumbnail:true,
                prize:true,
                courseDescription:true,
                ratingsAndReview:true,
                studentsEnrolled:true
                .populate('instructor')
                .exec()
            }    
        )
        return res.status(200).json({
            success : true,
            message : "All courses fetched successfully",
            data:allCourses
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success : fasle,
            message : "All courses fetched Unsuccessfully",
        })
        
    }
}

export const courseDetails = async (req,res) => {
    try {
        const {courseId} = req.body
        const courseDetails = await course.findById(courseId)
        .populate('ratingsAndReview')
        .populate('section')
        .exec()

        return res.status(200).json({
            success : true,
            message : "Course details fetched successfully",
            data:{
                courseName:courseDetails.courseName,
                courseDescription:courseDetails.courseDescription,
                whatYouWillLearn:courseDetails.whatYouWillLearn,
                thumbnail:courseDetails.thumbnail,
                tag:courseDetails.tag,
                startDate:courseDetails.startDate,
                mode:courseDetails.mode,
                instructor:courseDetails.instructor,
                ratingsAndReview:courseDetails.ratingsAndReview,
                courseContent:courseDetails.courseContent,
                student:courseDetails.studentsEnrolled,
                prize:courseDetails.prize
            }
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Course details fetched Unsuccessfully",
        })
    }
}

export const deleteCourse = async (req,res) => {
    try {
        const {courseId} = req.body
        const deletedCourse = await course.findByIdAndDelete(courseId)
        return res.status(200).json({
            success : true,
            message : "Course deleted successfully",
            data:deletedCourse
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Course deleted Unsuccessfully",
        })
    }
}