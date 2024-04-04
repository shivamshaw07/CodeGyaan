import mongoose from "mongoose";

const courseSchema = new  mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    courseDescription:{
        type:String,
        required:true
    },
    startDate : {
        type:String,
        required:true
    },
    mode:{
        type:String,
        required:true
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
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    tag:{
        type :[String],
        default:[]
    },
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]

});

export default mongoose.model("Course",courseSchema)