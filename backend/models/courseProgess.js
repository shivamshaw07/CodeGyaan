import mongoose from "mongoose";

const courseProgressSchema = mongoose.Schema({
    courseId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    completedVideos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubSection"
        }
    ]

});

export default mongoose.model("courseProgress",courseProgressSchema)