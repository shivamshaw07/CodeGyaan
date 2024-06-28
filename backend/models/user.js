import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    firstName : {
        type:String,
        required : true,
        trim : true,
    },
    lastName : {
        type:String,
        required : true,
        trim : true,
    },
    email:{
        type:String,
        required : true,
        trim : true,
    },
    password:{
        type:String,
        required:true,
        trim : true
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"]
    },
    dob:{
        type:Date
    },
    contactNumber:{
        type:Number
    },
    about:{
        type:String
    },
    
    token:{
        type:String
    },
    resetPasswordExpires:{
        type:Date,
        
    },
    accountType:{
        type:String,
        required:true,
        enum:["Instructor","Student","Admin"]
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
    },
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    image:{
        type:String,
        required:true
    },
    cart: {
        courses: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
          },
        ],
        totalPrice: {
          type: Number,
          default: 0,
        },
      },
    
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress"
        }
    ],
    ratingAndReview:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }
    ],
})

export default mongoose.model("User",userSchema)