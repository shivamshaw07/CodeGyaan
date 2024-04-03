import { Router } from "express"
import { auth } from "../middlewares/auth.js"
import user from "../models/user.js"

const userRoute = Router()

userRoute.get('/user',auth,(req,res)=>{
    res.status(200).json({
        success : true,
        message : "user is authenticated"
    })
})
userRoute.get('/profile',auth,async(req,res)=>{
    try {
        const userId = req.user.id;
        const userDetail = await user.findById(userId)
        if(!userDetail){
            return res.status(404).json({
                message : "User not found",
                success: false
            })
        }
        return res.status(200).json({
            data : userDetail,
            message : "user profile",
            success: true
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message : "Error occured while fetching User details",
            success : false
        })
    }

})
export default userRoute