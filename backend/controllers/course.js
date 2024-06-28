import user from "../models/user.js";
import Tag from "../models/tag.js";
import { uploadImageToCloudinary } from "../utils/imageUploader.js";
import RatingAndReview from "../models/ratingAndReviews.js";
import { config as configDotenv, populate } from "dotenv";
import course from "../models/course.js";
import courseProgess from "../models/courseProgess.js";
import convertSecondsToDuration from "../utils/secToDuration.js";
configDotenv();

export const createCourse = async (req,res) =>{
    try {
        const {courseName,courseDescription,whatYouWillLearn,price,tag,startDate,mode,instruction,category} = req.body
        const thumbnailrec = req.files.thumbnail
        //validate the datas
        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !thumbnailrec || !tag ||!startDate || !mode || !category || !instruction){
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
            price:price,
            tag:tag,
            thumbnail : thumbNailImage.secure_url,
            startDate:startDate,
            mode:mode,
            instruction:instruction,
            category:category
        })
    
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


// Edit Course Details
export const editCourse = async (req, res) => {
    try {
      const { courseId } = req.body
      const updates = req.body
      const courseDetail = await course.findById(courseId)
  
      if (!courseDetail) {
        return res.status(404).json({ error: "Course not found" })
      }
  
      // If Thumbnail Image is found, update it
      if (req.files) {
        console.log("thumbnail update")
        const thumbnail = req.files.thumbnail
        const thumbnailImage = await uploadImageToCloudinary(
          thumbnail,
          process.env.FOLDER_NAME
        )
        courseDetail.thumbnail = thumbnailImage.secure_url
      }
  
      // Update only the fields that are present in the request body
      for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
          if (key === "tag" || key === "instruction") {
            courseDetail[key] = JSON.parse(updates[key])
          } else {
            courseDetail[key] = updates[key]
          }
        }
      }
  
      await courseDetail.save()
  
      const updatedCourse = await course.findOne({
        _id: courseId,
      })
        .populate({
          path: "instructor",
          populate: {
            path: "additionalDetails",
          },
        })
        // .populate("category")
        .populate("ratingAndReviews")
        .populate({
          path: "courseContent",
          populate: {
            path: "subSection",
          },
        })
        .exec()
  
      res.json({
        success: true,
        message: "Course updated successfully",
        data: updatedCourse,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }

export const fetchInstructorCourses = async (req,res) => {
  try {
    const {id} = req.body;
    const courses = await course.find({instructor:id})
    if(!courses){
      return res.status(404).json({
        success : false,
        message : "No courses found"
      })
    }
    return res.status(200).json({
      success : true,
      message : "Courses fetched successfully",
      data : courses
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success : false,
      message : "Courses fetched Unsuccessfully",
    })
  }
}

export const getAllCourses = async (req,res) => {
  console.log(req.body);
    try {
        const allCourses = await course.find({}).populate("instructor")
        console.log(allCourses);
        return res.status(200).json({
            success : true,
            message : "All courses fetched successfully",
            data:allCourses
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success : false,
            message : "All courses fetched Unsuccessfully",
        })
        
    }
}

export const courseDetails = async (req,res) => {
    try {
        const {id} = req.params
        const courseDetails = await course.findById(id)
        .populate("instructor")
        // .populate("category")
        .populate("ratingAndReviews")
        .populate({
          path: "courseContent",
          populate: {
            path: "subSection",
          },
        })
        .exec()
        if(!courseDetails){
            return res.status(404).json({
                success : false,
                message : "Course not found"
            })
          }
        return res.status(200).json({
            success : true,
            message : "Course details fetched successfully",
            data:courseDetails
        })
    } catch (error) {
      console.log(error);
        return res.status(500).json({
            success : false,
            message : "Course details fetched Unsuccessfully",
        })
    }
}

export const getFullCompleteCourse = async (req, res) => {
  try {
    
    const { courseId } = req.body
    const userId = req.body.id
    const courseDetails = await course.findOne({
      _id: courseId,
    })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      // .populate("category")
      .populate("ratingAndReviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec()

    let courseProgressCount = await courseProgess.findOne({
      courseID: courseId,
      userId: userId,
    })


    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find course with id: ${courseId}`,
      })
    }

    // if (courseDetails.status === "Draft") {
    //   return res.status(403).json({
    //     success: false,
    //     message: `Accessing a draft course is forbidden`,
    //   });
    // }

    let totalDurationInSeconds = 0
    courseDetails.courseContent.forEach((content) => {
      content.subSection.forEach((subSection) => {
        const timeDurationInSeconds = parseInt(subSection.timeDuration)
        totalDurationInSeconds += timeDurationInSeconds
      })
    })

    const totalDuration = convertSecondsToDuration(totalDurationInSeconds)

    return res.status(200).json({
      success: true,
      data: {
        courseDetails,
        totalDuration,
        completedVideos: courseProgressCount?.completedVideos
          ? courseProgressCount?.completedVideos
          : [],
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const deleteCourse = async (req,res) => {
    try {
        const {courseId} = req.body
        console.log(courseId);
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


//get enrolled courses
export const getEnrolledCourses = async (req,res) => {
    try {
        const {id} = req.params
        const enrolledCourses = await user.findById(id)
        .populate({
          path: 'enrolledCourses',
          populate: {
              path: 'courseContent',
              populate: {
                  path: 'subSection'
              }
              
          }
      }).exec()
        if(!enrolledCourses){
            return res.status(404).json({
                success : false,
                message : "Enrolled courses not found"
            })
        }
        return res.status(200).json({
            success : true,
            message : "Enrolled courses fetched successfully",
            data:enrolledCourses.enrolledCourses
        })
    } catch (error) {
      console.log(error);
        return res.status(500).json({
            success : false,
            message : "Enrolled courses fetched Unsuccessfully",
            err : error
        })
    }
}