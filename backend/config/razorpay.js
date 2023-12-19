import Razorpay from "razorpay";
import {config as configDotenv } from "dotenv";
configDotenv()

export const instance = new Razorpay({
    key_id:process.env.RAZORPAY_KEY,
    key_secret:process.env.RAZORPAY_secret,
})