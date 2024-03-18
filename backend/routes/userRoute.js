import { Router } from "express"
import { auth } from "../middlewares/auth.js"

const userRoute = Router()

userRoute.get('/user',auth,(req,res)=>{
    res.status(200).json({
        success : true,
        message : "user is authenticated"
    })
})

export default userRoute