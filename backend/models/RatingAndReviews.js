import mongoose from "mongoose";

export const RatingAndReviewsScehma = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    rating:{
        type:String,
        required:ture,
    },
    review:{
        type:String,
        required:ture,
    }
})

