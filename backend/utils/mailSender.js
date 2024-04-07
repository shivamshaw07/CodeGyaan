import nodemailer from "nodemailer";
import {config as configDotenv } from "dotenv";
configDotenv()

const mailSender = async (email,title,body) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587, 
            secure: false,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info = await transporter.sendMail({
            from:"Skill safari",
            to:`${email}`,
            subject:`${title}`,
            html:`Your OTP : ${body}`
        })
        return info
        
    } catch (error) {
        console.log(error.message);
    }
}

export default mailSender;