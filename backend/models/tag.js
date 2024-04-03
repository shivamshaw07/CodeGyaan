import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required : true,
    },
    course:{
        type:String,
        ref:"Course"
    }
})

export default mongoose.model("Tag",tagSchema)  