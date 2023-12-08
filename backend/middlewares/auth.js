import jwt from 'jsonwebtoken'
import {config as configDotenv} from 'dotenv'
configDotenv()

export const auth = async (req,res,next) => {
    try {
        const {token} = req.body.token || req.cookies.token || req.header("Authorisation").replace("Bearer ","");

        //see that token is present or not
        if(!token){
            return res.status(403).json({
                success:false,
                message:"Token not found"
            })
        }
    
        //verify the token
        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode
        } catch (error) {
            return res.status(403).json({
                success:false,
                message:"Token is invalid"
            })
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            success:false,
            message:"Token validation unsuccessful"
        })
    }

}

export const isStudent = async (req,res,next) => {
    try {
        const {accountType} = req.body.accountType;
        if(accountType !== "Student"){
            return res.status(400).json({
                success:false,
                message:"This is protected route for student"
            })
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error while validating the accoutType"
        })
    }
}



export const isInstructor = async (req,res,next) => {
    try {
        const {accountType} = req.body.accountType;
        if(accountType !== "Instructor"){
            return res.status(400).json({
                success:false,
                message:"This is protected route for Instructor"
            })
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error while validating the accoutType"
        })
    }
}



export const isAdmin = async (req,res,next) => {
    try {
        const {accountType} = req.body.accountType;
        if(accountType !== "Admin"){
            return res.status(400).json({
                success:false,
                message:"This is protected route for Admin"
            })
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Error while validating the accoutType"
        })
    }
}