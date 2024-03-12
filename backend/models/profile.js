import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
    gender:{
        type:String,
        // required:true,
        trim:true
    },
    dateOfBirth : {
        type:String,
        // required:true,
        trim:true
    },
    about:{
        type:String,
        // required:true,
        trim:true
    },
    contactNumber:{
        type:String,
        // requied:true,
        trim:true
    }
})

export default mongoose.model("Profile",ProfileSchema)