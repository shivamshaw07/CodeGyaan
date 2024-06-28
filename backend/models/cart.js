import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    courses : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    totalPrice : {
        type:Number
    }

})

export default mongoose.model("Cart",cartSchema)