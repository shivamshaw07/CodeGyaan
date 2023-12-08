import mongoose from "mongoose";

const SubSectionSchema = new mongoose.Schema({
    title:{
        type:String,
        requied:true
    },
    description:{
        type:String,
        requied:true
    },
    videoUrl:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    }
});

export default mongoose.model("SubSection",SubSectionSchema)