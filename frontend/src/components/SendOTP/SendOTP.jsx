import React, { useRef, useState } from "react";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import authImage from "../../assets/signin-banner-removebg-preview.png";
import { signup } from "../../servies/operations/authOpertaion";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const SendOTP = () => {
    const dispatch = useDispatch();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const navigate = useNavigate()
    const data = useSelector((state) => state.auth.signUpData);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field
    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (otp.join("") === "") {
      toast.error("Please fill all the fields");
      return;
    }
    const refData = data
    const newData = {
      ...refData, // Spread the existing properties of data
      otp: otp.join("") // Add or update the otp property
    };
  
    dispatch(signup(newData, navigate));
  }
  return (
    <div className="w-screen h-screen flex justify-center items-start">
      <img src={authImage} alt="signin" className="h-full w-auto" />
      <div className="flex flex-col gap-[6vh] shadow-2xl h-full w-full pt-[3vh] px-[3vw]">
        <Link to={"/"}>
          <h1 className="text-4xl font-bold text-white flex justify-start items-center">
            <LiaFreeCodeCamp className="text-[50px] mr-1" />
            Code<span className="text-glod-color">Gyaan.</span>
          </h1>
        </Link>
        <div className="flex flex-col justify-start gap-[2vh]">
          <h1 className="text-white text-2xl font-bold">
            Get Onboard and jumpstart your career!
          </h1>
          <h1 className="text-white text-2xl font-bold">Verify Email</h1>
          <p className="text-sm text-white/80">
            A verification code has been sent to you. Enter the code below
          </p>
          <div>
            <form onSubmit={formHandler} className="flex flex-col gap-[3vh] w-full">
              <div
                id="otp"
                className="flex flex-row justify-between text-center px-2 mt-5"
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    style={{ border: "1px solid white" }}
                    className="m-2 border h-12 w-12 text-center form-control rounded text-white"
                    type="text"
                    id="first"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                  />
                ))}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-glod-color w-full text-center py-2 font-semibold rounded-md text-[#fff] hover:bg-[#b99b55]"
                >
                  Submit OTP
                </button>
                <div className="w-full text-end text-white text-sm">
                  Didn't recived OTP?{" "}
                  <Link to="/login">
                    <span className="text-amber-300">Resend OTP</span>
                  </Link>
                </div>
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
