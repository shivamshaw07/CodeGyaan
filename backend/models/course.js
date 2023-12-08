import mongoose from "mongoose";

const courseSchema = new  mongoose.Schema({
    courseName:{
        type:String,
        requied:true
    },
    courseDescription:{
        type:String,
        requied:true
    },
    instructor:{
        type:String,
        required:true
    },
    whatYouWillLearn:{
        type:String,
        required:true
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
    ],
    ratingsAndReview:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReviews"
        }
    ],
    prize:{
        type:Number
    },
    thumbnail:{
        type:String,
        required:true
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag"
    },
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]

});

export default mongoose.model("Course",courseSchema)