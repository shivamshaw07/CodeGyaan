import User from "../models/user.js";
import OTP from '../models/otp.js'
import Profile from '../models/profile.js'
import otpGenerator from 'otp-generator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config as configDotenv } from "dotenv";
import mailSender from "../utils/mailSender.js";
import multer from 'multer'
configDotenv()

// send otp
export const sendOtp = async (req,res) =>{
    try {
        const {email} = req.body;

        //check that user is already present or not
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        //if new user than generate otp
        let otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        })

        let result = await OTP.findOne({otp:otp})

        //keep checking till you get a unique otp
        //bad practice bcz we are interacting with db again again if the otp doent match
        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            })
            result = await OTP.findOne({otp:otp})
        }

        console.log("OTP generated successfully : ",otp);
        const otpResult = await OTP.create({email,otp})
        mailSender(email,"Verification code",otp)
        return res.status(200).json({
            success : true,
            message : "OTP sent successfully",
            data : otpResult
        })
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : "OTP not sent successfully",
        })
    }
}


//sign up
export const signup = async (req,res) =>{

    try {
        //fetching all the details requied
        const {
            firstName,
            lastName,
            password,
            confirmPassword,
            email,
            accountType,
            contactNumber,
            otp
        } = req.body;
        console.log(req.body);
        //all fields must be filled
        if(!firstName || !lastName || !password || !confirmPassword || !email || !accountType  ){
            return res.status(401).json({
                success : false,
                message : "Please fill all the feilds"
            })
        }

        //vaildating that the user already exists or not
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).json({
                success : false,
                message : "User already exists"
            })
        }

        //check password and confirmPassword
        if(password !== confirmPassword){
            return res.status(401).json({
                success : false,
                message : "password not matched"
            })
        }
        // await sendOtp(email)
        //find most recent otp
        const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
		console.log(response);

        //validate otp
        if (response.length === 0) {
			// OTP not found for the email
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		} else if (otp !== response[0].otp) {
			// Invalid OTP
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		}
        //hash password
        const hashedPassword = bcrypt.hash(password,10)
        const finalPass = (await hashedPassword).toString()

        //create entry in db
        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null,
        })

        const user = await User.create({
            firstName,
            lastName,
            email,
            password : finalPass,
            contactNumber,
            accountType,
            additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/7.x/initials/svg?seed=${firstName} ${lastName}`
        })

        //retur response
        return res.status(200).json({
            success:true,
            message:"user registered successfully",
            data:user
        })
    } catch (error) {
        console.log("Error while registerinf user : ",error);
        return res.status(500).json({
            success:false,
            message:"user not registered successfully",
            
        })
        
    }
}


export const login = async (req,res) =>{
    try {
        //fetch data
        const {email,password} = req.body;

        //check that filled or not
        if(!email || !password){
            return res.status(400).json({
                message:"Fill the details correctly",
                success:false
            })
        }

        //check that user exist or not
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found",
            })
        }

        //check password is correct or not
        if(await bcrypt.compare(password,user.password)){
            const payload = {
                email:user.email,
                id:user._id,
                role:user.role
            }

            //create jwt token
            const Token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"3d"
            })

            user.token = Token
            user.password = undefined

            //create cookie and then send response
            const options = {
                expires : new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }

            //send cookie
            res.cookie("token",Token,options).status(200).json({
                success : true,
                token:Token,
                user : user,
                message:"User loged in successfully"
            })
        }
        else{
            res.status(500).json({
                success : false,
                message:"password is incorrect",
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message:"Error while loging user",
        })
    }
}


//change password
export const changePassword = async (req,res) =>{
    try {
            //get oldpass, newpass, confirmpass
            const {oldPass,newPass,confirmPass,email,user} = req.body


            //check the validation

            //check the last password
            if(user.password !== oldPass){
                return res.status(500).json({
                    success : false,
                    message:"Old password not matched",
                })
            }

            
            //check the newPass and confirmpass
            if(newPass !== confirmPass){
                return res.status(500).json({
                    success : false,
                    message:"Password not matched",
                })
            }

            //upadate pass in db
            const updatedPass = await User.findByIdAndUpdate({_id})

            //send a confirmation mail
            mailSender(email,"Skill Safari","OTP updated successfully")
            //send res 
            res.status(200).json({
                success : true,
                message:"Password updated successfully",
            })
    } catch (error) {
        
    }
}