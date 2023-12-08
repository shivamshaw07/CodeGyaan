import User from "../models/user";
import mailSender from "../utils/mailSender";
import bcrypt from 'bcrypt'


export const resetPasswordToken = async (req,res) =>{
    try {
        const email = req.body.email;

        //check the user exist or not
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(403).json({
                success:false,
                message:"User not exist"
            })
        }
        //generate token
        const token = crypto.randomUUID()
        //update user details
        const updateDetails = await findOneAndUpdate(
            {email:email},
            {
                token:token,
                resetPasswordExpires:Date.now() + 5 * 60 * 60 *1000
            },
            {new:true}
        )

        //create link
        const url = `http://localhost:3000/update-password/${token}`;
        //send mail
        mailSender(email,"Reset password link",url)

        return res.status(200).json({
            success:true,
            message:"Reset Email sent successfully, Please check email and change password"
        })
    } catch (error) {
        console.log("Error while ssending reset email link",error);
        return res.status(200).json({
            success:false,
            message:"Reset Email sent unsuccessfully"
        })
    }
}

export const resetPassword = async (req,res) =>{
    try {
        //fetch details
        const {NewPassword,confiemPassword,token} = req.body

        //valiadate the password
        if(NewPassword !== confiemPassword){
            return res.status(400).json({
                success : false,
                message: "Password not matched"
            })
        }

        //get the user details by token

        const userdetails = await User.findOne({token:token})
        if(!userdetails){
            return res.status(401).json({
                success : false,
                message : "token not found"
            })
        }

        //check expires time
        if(userdetails.resetPasswordExpires < Date.now()){
            return res.status(401).json({
                success : false,
                message : "OTP time exceeds"
            })
        }

        //hash the password
        const hashedPassword = await bcrypt.hash(NewPassword,10)

        //update the password 
        const updatedDetails = await User.findoneAndUpdate(
            {token:token},
            {password:hashedPassword},
            {new:true}
        )

        return res.status(401).json({
            success : true,
            message : "Password updated successfully"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success : false,
            message : "Someting went wrong while reseting password"
        })
        
    }
}