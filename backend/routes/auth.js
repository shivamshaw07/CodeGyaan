import { Router } from "express";
import { login, sendOtp } from "../controllers/auth.js";
import { signup } from "../controllers/auth.js";

const authRoute = Router();

//authentication
authRoute.post('/login',login);
authRoute.post('/singup',signup);
authRoute.post('/sendOTP',sendOtp);

export default authRoute