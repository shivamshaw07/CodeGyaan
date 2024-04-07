import { Router } from "express"
import { auth } from "../middlewares/auth.js"
import user from "../models/user.js"
import { uploadImageToCloudinary } from "../utils/imageUploader.js"

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

userRoute.post('/updateProfile',auth,async(req,res)=>{
    try {
        const {firstName,lastName,contactNumber,about,image,gender,id} = req.body
        let dob = req.body.dob
         dob = new Date(dob)
        const userDetail = await user.findByIdAndUpdate(id,{firstName,lastName,contactNumber,about,image,dob,gender})
        if(!userDetail){
            return res.status(404).json({
                message : "User not found",
                success: false
            })
        }
        return res.status(200).json({
            user : userDetail,
            message : "user profile updated",
            success: true
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message : "Error occured while updating User details",
            success : false
        })
    }
})

userRoute.get('/updatePic',auth,async(req,res)=>{
    try {
        const {image} = req.files.image
        if(!image){
            return res.status(500).json({
                message : "Please upload an image",
                success : false
            })
        }
        const secureUrl = await uploadImageToCloudinary(image,process.env.FOLDER_NAME)
        return res.status(200).json({
            image : secureUrl.secure_url,
            success : true
        })
    } catch (error) {
        return res.status(500).json({
            message : "Error occured while updating User details",
            success : false
        })
    }
})

export default userRoute