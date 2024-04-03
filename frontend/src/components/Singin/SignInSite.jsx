import React, { useState } from "react";
import { LiaFreeCodeCamp } from "react-icons/lia";
import authImage from "../../assets/signin-banner-removebg-preview.png";
import { Link } from "react-router-dom";

const SignInSite = () => {
  const formSubmitHandler = () => {
    console.log("Form submitted");
  };
  const [accountType, setAccountType] = useState("Student");

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
          <p className="text-sm text-white/80">
            Please enter your details to signIn 
          </p>
          <div>
            <form
              onSubmit={formSubmitHandler}
              className="flex flex-col gap-[3vh] w-full"
            >
              <div className="flex gap-[1vw] bg-black-bg items-center justify-start w-[49%] p-2 rounded-3xl">
                <div onClick={()=>setAccountType("Student")} className =  {accountType === 'Student' ? "cursor-pointer text-lg bg-glod-color text-white px-3 py-1 rounded-3xl font-semibold":"text-lg cursor-pointer text-white px-3 py-1 rounded-3xl font-semibold"}>Student</div>
                <div  onClick={()=>setAccountType("Instructor")} className = {accountType === 'Instructor' ? "cursor-pointer text-lg bg-glod-color text-white px-3 py-1 rounded-3xl font-semibold":"text-lg cursor-pointer  text-white px-3 py-1 rounded-3xl font-semibold"}>Instructor</div>
              </div>
              <div className="flex gap-[1.45vw]">
                <div className="flex flex-col">
                  <label htmlFor="first" className="text-white font-medium ">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first"
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      border: "2px solid white",
                    }}
                    placeholder="Enter your Fisrt name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="last" className="text-white font-medium ">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last"
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      border: "2px solid white",
                    }}
                    placeholder="Enter your Last name"
                  />
                </div>
              </div>
              <div className="flex gap-[1.45vw] w-full ">
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-white font-medium ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      border: "2px solid white",
                    }}
                    placeholder="Enter your email"
                  />
                </div>
                {/* <div className="flex flex-col">
                  <label htmlFor="num" className="text-white font-medium ">
                    Phone no.
                  </label>
                  <input
                    type="number"
                    id="num"
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      border: "2px solid white",
                    }}
                    placeholder="Enter your Phone no."
                  />
                </div> */}
              </div>
              <div className="flex gap-[1.45vw]">
                <div className="flex flex-col">
                  <label htmlFor="pass" className="text-white font-medium ">
                    Password
                  </label>
                  <input
                    type="pass"
                    id="pass"
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      border: "2px solid white",
                    }}
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="conpass" className="text-white font-medium ">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="conpass"
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      border: "2px solid white",
                    }}
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <div>
                <button className="bg-glod-color w-full text-center py-2 font-semibold rounded-md text-[#fff] hover:bg-[#b99b55]">
                  Sign In
                </button>
                <div className="w-full text-end text-white text-sm">
                  Existing user?{" "}
                  <Link to="/login">
                    <span className="text-amber-300">Login</span>
                  </Link>
                </div>
              </div>{" "}
              <div className="w-full text-white text-lg font-light text-center">
                OR
              </div>
              <button className="bg-white w-full text-center py-2 font-semibold rounded-md text-black">
                Signin with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSite;
