    import mongoose from "mongoose";
    import course from "../models/course.js";
    import RatingAndReview from "../models/ratingAndReviews.js";
    //createRating
    export const createRating = async (req, res) => {
    try {
        //fetchdata from req body
        const { rating, review, courseId, id } = req.body;
        //check if user is enrolled or not
        
        const courseDetails = await course.findOne({ _id: courseId });
        if (!courseDetails.studentsEnrolled.includes(id)) {
        return res.status(404).json({
            success: false,
            message: "Student is not enrolled in the course",
        });
        }
        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
          user: id,
          course: courseId,
        });
        // console.log(courseDetails);
        if (alreadyReviewed) {
        return res.status(403).json({
            success: false,
            message: "Course is already reviewed by the user",
        });
        }
        //create rating and review
        const ratingReview = await RatingAndReview.create({
        rating,
        review,
        course: courseId,
        user: id,
        });

        //update course with this rating/review
        const updatedCourseDetails = await course.findByIdAndUpdate(
        { _id: courseId },
        {
            $push: {
            ratingAndReviews: ratingReview._id,
            },
        },
        { new: true }
        );
        console.log(updatedCourseDetails);
        //return response
        return res.status(200).json({
        success: true,
        message: "Rating and Review created Successfully",
        ratingReview,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success: false,
        message: error.message,
        });
    }
    };

    //getAverageRating
    export const getAverageRating = async (req, res) => {
    try {
        //get course ID
        const courseId = req.body.courseId;
        //calculate avg rating

        const result = await RatingAndReview.aggregate([
        {
            $match: {
            course: new mongoose.Types.ObjectId(courseId),
            },
        },
        {
            $group: {
            _id: null,
            averageRating: { $avg: "$rating" },
            },
        },
        ]);

        //return rating
        if (result.length > 0) {
        return res.status(200).json({
            success: true,
            averageRating: result[0].averageRating,
        });
        }

        //if no rating/Review exist
        return res.status(200).json({
        success: true,
        message: "Average Rating is 0, no ratings given till now",
        averageRating: 0,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success: false,
        message: error.message,
        });
    }
    };

//getAllRatingAndReviews

export const getAllRating = async (req, res) => {
  try {
    const allReviews = await RatingAndReview
      .find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName lastName email image",
      })
      .populate({
        path: "course",
        select: "courseName",
      })
      .exec();
    return res.status(200).json({
      success: true,
      message: "All reviews fetched successfully",
      data: allReviews,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
