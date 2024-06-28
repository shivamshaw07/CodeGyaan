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
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    whatYouWillLearn:{
        type:String,
        required:true
    },
    category :{
        type:String,
        required:true
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
    ],
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }
    ],
	status: {
		type: String,
		enum: ["Draft", "Published"],
        default: "Draft"
    },
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    instruction :{
        type:[String],
        default:[]
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