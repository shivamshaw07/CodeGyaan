import React, { useState } from "react";
import { LiaFreeCodeCamp } from "react-icons/lia";
import authImage from "../../assets/signin-banner-removebg-preview.png";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from "../../servies/operations/authOpertaion";

const Login = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setIsPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password,navigate))

  };

  return (
    <div className="w-screen h-screen flex justify-center items-start">
      <img src={authImage} alt="signin" className="h-full w-auto" />
      <div className="flex flex-col gap-[6vh] shadow-2xl h-full w-full pt-[10vh] px-[5vw]">
      <Link to={'/'}>
        <h1 className="text-4xl font-bold text-white flex justify-start items-center">
          <LiaFreeCodeCamp className="text-[50px] mr-1" />
          Code<span className="text-glod-color">Gyaan.</span>
        </h1>
        </Link>
        <div className="flex flex-col justify-start gap-[2vh]">
          <h1 className="text-white text-2xl font-bold">
            Get Onboard and jumpstart your career!
          </h1>
          <p className="text-sm text-white/80">
            Please enter your email and password to login
          </p>
          <div>
            <form onSubmit={formSubmitHandler} className="flex flex-col gap-[3vh]">
              <div className="flex flex-col">
              {isEmailFocused && <label htmlFor="email" className="text-white font-medium ">
                  Email
                </label>}
                <input
                  type="email"
                  id="email"
                  className="text-white rounded-lg px-4 py-1"
                  style={{
                    borderBottom:`${
                      isEmailFocused ? "2px solid white " : "1px solid white"
                    }`,
                  }}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  placeholder="Enter your email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                { isPasswordFocused && <label htmlFor="pass" className="text-white font-medium ">
                  Password
                </label>}
                <input
                  type="password"
                  id="pass"
                  className="text-white rounded-lg px-4 py-1"
                  style={{
                    borderBottom: `${
                      isPasswordFocused ? "2px solid white" : "1px solid white"
                    }`,
                  }}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  placeholder="Enter your password"
                  onChange={(e)=>setIsPassword(e.target.value)}
                />
              </div>
              <div>
              <button className="bg-glod-color w-full text-center py-2 font-semibold rounded-md text-[#fff] hover:bg-[#b99b55]">Login</button>
                  <div className="w-full text-end text-white text-sm">New user? <Link to='/signin'><span className="text-amber-300">SignIn</span></Link></div>
              </div>
              <div className="w-full text-white text-lg font-light text-center">OR</div>
              <button className="bg-white w-full text-center py-2 font-semibold rounded-md text-black">Signin with Google</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
