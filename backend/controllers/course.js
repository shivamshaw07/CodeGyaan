import user from "../models/user.js";
import Tag from "../models/tag.js";
import { uploadImageToCloudinary } from "../utils/imageUploader.js";
import { config as configDotenv } from "dotenv";
import course from "../models/course.js";
configDotenv();

export const createCourse = async (req,res) =>{
    try {
        const {courseName,courseDescription,whatYouWillLearn,prize,tag} = req.body
        const thumbnail = req.files.thumbnail
    
        //validate the datas
        if(!courseName || !courseDescription || !whatYouWillLearn || !prize || !thumbnail || tag){
            return res.status(500).json({
                status:false,
                message : "All field are mandatory"
            })
        }
    
        //check for instructor
        const userId = req.user.id
        const instructorDetails = await user.findById(userId)
        console.log("instructorDetails : ",instructorDetails);
    
        if(!instructorDetails){
            return res.status(404).json({
                status:false,
                message : "Instructor details not found"
            })
        }
    
        //validate tag
        const tagDetails = await Tag.findById(tag)
        if(!tagDetails){
            return res.status(404).json({
                status:false,
                message : "Tag details not found"
            })
        }
    
        //upload image to cloudinary
        const thumbNailImage = uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME)
    
        //create new course
        const newCourse = await course.create({
            instructor:instructorDetails._id,
            courseName,
            whatYouWillLearn:whatYouWillLearn,
            courseDescription:courseDescription,
            prize:prize,
            tag:tagDetails._id,
            thumbnail:thumbnail.secure_url
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
            success : fasle,
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