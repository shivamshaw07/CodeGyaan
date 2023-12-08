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
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress"
        }
    ]
})

export default mongoose.model("User",userSchema)