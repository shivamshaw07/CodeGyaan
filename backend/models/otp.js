import mongoose from "mongoose";
import mailSender from "../utils/mailSender.js";

const otpSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        requied:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        exprires: 5*60
    }
})

async function sendVerificationEmail(email,otp) {

    try {
        const mailResponse = await mailSender(email,"Verfication code",otp)
        console.log("Mail response : ",mailResponse);
    } catch (error) {
        console.log("Error occured while sending OTP mail : ",error);
    }
    
}

otpSchema.pre("save", async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next()
})

export default mongoose.model("OTP",otpSchema)