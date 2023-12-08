import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
    sectionName:{
        type:String,
        required:true
    },
    subSection:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"SubSection"
        }
    ]
});

export default mongoose.model("Section",SectionSchema)