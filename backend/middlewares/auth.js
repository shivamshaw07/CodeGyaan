import jwt from 'jsonwebtoken'
import {config as configDotenv} from 'dotenv'
import user from '../models/user.js';
configDotenv()

export const auth = async (req, res, next) => {
    try {
        let token;
        // Check for the token in different sources
        if (req.body && req.body.token) {
            token = req.body.token;
        } else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        } else if (req.headers && req.headers.authorization) {
            token = req.headers.authorization.replace("Bearer ", "");
        }
        // console.log(token);
        // Check if token is present
        if (!token) {
            return res.status(403).json({
                success: false,
                message: "Token not found",
            });
        }

        // Verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            next();
        } catch (error) {
            return res.status(403).json({
                success: false,
                message: "Token is invalid",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            success: false,
            message: "Token validation unsuccessful",
        });
    }
};
export const checkToken = async (req, res) => {
    try {
        let token;
        // Check for the token in different sources
        if (req.body && req.body.token) {
            token = req.body.token;
        } else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        } else if (req.headers && req.headers.authorization) {
            token = req.headers.authorization.replace("Bearer ", "");
        }
        // console.log(token);
        // Check if token is present
        if (!token) {
            return res.status(403).json({
                success: false,
                message: "Token not found",
            });
        }

        // Verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            return res.status(200).json({
                success: true,
                message: "Token is valid",
            })
        } catch (error) {
            return res.status(403).json({
                success: false,
                message: "Token is invalid",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            success: false,
            message: "Token validation unsuccessful",
        });
    }
};


export const isStudent = async (req,res,next) => {
    try {
        const userId = req.body.id  || req.params.id;
        
        const userType = await user.findById(userId,'accountType');
        // console.log(userType);
            if(userType.accountType !== "Student"){
            req["user"] = userId;
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
        const {id} = req.body;
        const userType = await user.findById(id,'accountType');
        if(userType.accountType !== "Instructor"){
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
        const userId = req.user.id;
        const userType = await user.findById(userId,'accountType');
        if(userType !== "Admin"){
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