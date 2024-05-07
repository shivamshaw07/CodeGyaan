import React, { useState } from "react";
import { LiaFreeCodeCamp } from "react-icons/lia";
import authImage from "../../assets/signin-banner-removebg-preview.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { sendOtp } from "../../servies/operations/authOpertaion";

const SignInSite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState(false);
  const [conPass, setConPass] = useState(false);

  const [changeFiled, setChangeFiled] = useState({
    accountType: "" || "Student",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setChangeFiled({
      ...changeFiled,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      changeFiled.firstName === "" ||
      changeFiled.lastName === "" ||
      changeFiled.email === "" ||
      changeFiled.password === "" ||
      changeFiled.confirmPassword === "" ||
      changeFiled.accountType === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    dispatch(sendOtp(changeFiled.email, navigate, changeFiled));
  };

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
                <div
                  onClick={() => setChangeFiled({ ...changeFiled, accountType: "Student" })}
                  className={
                    changeFiled.accountType === "Student"
                      ? "cursor-pointer text-lg bg-glod-color text-white px-3 py-1 rounded-3xl font-semibold"
                      : "text-lg cursor-pointer text-white px-3 py-1 rounded-3xl font-semibold"
                  }
                >
                  Student
                </div>
                <div
                  onClick={() => setChangeFiled({...changeFiled,accountType: "Instructor"})}
                  className={
                    changeFiled.accountType === "Instructor"
                      ? "cursor-pointer text-lg bg-glod-color text-white px-3 py-1 rounded-3xl font-semibold"
                      : "text-lg cursor-pointer  text-white px-3 py-1 rounded-3xl font-semibold"
                  }
                >
                  Instructor
                </div>
              </div>
              <div className="flex gap-[1.45vw]">
                <div className="flex flex-col h-[7vh] justify-end ">
                  <label
                    htmlFor="first"
                    className={
                      firstName
                        ? "text-white font-medium text-sm block"
                        : "text-white font-medium text-sm hidden"
                    }
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first"
                    name="firstName"
                    value={changeFiled.firstName}
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      borderBottom: "1px solid white",
                    }}
                    placeholder="Enter your Fisrt name"
                    onFocus={() => setFirstName(true)}
                    onBlur={() => setFirstName(false)}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
                <div className="flex flex-col h-[7vh] justify-end ">
                  <label
                    htmlFor="last"
                    className={
                      lastName
                        ? "text-white font-medium text-sm block"
                        : "text-white font-medium text-sm hidden"
                    }
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last"
                    name="lastName"
                    value={changeFiled.lastName}
                    onChange={(e) => changeHandler(e)}
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      borderBottom: "1px solid white",
                    }}
                    placeholder="Enter your Last name"
                    onFocus={() => setLastName(true)}
                    onBlur={() => setLastName(false)}
                  />
                </div>
              </div>
              <div className="flex gap-[1.45vw] w-full ">
                <div className="flex flex-col w-full h-[7vh] justify-end ">
                  <label
                    htmlFor="email"
                    className={
                      email
                        ? "text-white font-medium text-sm block"
                        : "text-white font-medium text-sm hidden"
                    }
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={changeFiled.email}
                    onChange={(e) => changeHandler(e)}
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      borderBottom: "1px solid white",
                    }}
                    placeholder="Enter your email"
                    onFocus={() => setEmail(true)}
                    onBlur={() => setEmail(false)}
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
                      borderBottom: "1px solid white",
                    }}
                    placeholder="Enter your Phone no."
                  />
                </div> */}
              </div>
              <div className="flex gap-[1.45vw] ">
                <div className="flex flex-col h-[7vh] justify-end items-start">
                  <label
                    htmlFor="pass"
                    className={
                      pass
                        ? "text-white font-medium text-sm block"
                        : "text-white font-medium text-sm hidden"
                    }
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="pass"
                    name="password"
                    value={changeFiled.password}
                    onChange={(e) => changeHandler(e)}
                    className="text-white rounded-lg px-4 py-1"
                    style={{
                      borderBottom: "1px solid white",
                    }}
                    placeholder="Enter your Password"
                    onFocus={() => setPass(true)}
                    onBlur={() => setPass(false)}
                  />
                </div>
                <div className="flex flex-col h-[7vh] justify-end items-start ">
                  <label
                    htmlFor="conpass"
                    className={
                      conPass
                        ? "text-white font-medium text-sm block"
                        : "text-white font-medium text-sm hidden"
                    }
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="conpass"
                    name="confirmPassword"
                    value={changeFiled.confirmPassword}
                    onChange={(e) => changeHandler(e)}
                    className="text-white rounded-lg px-4 py-1 "
                    style={{
                      borderBottom: "1px solid white",
                    }}
                    placeholder="Confirm your password"
                    onFocus={() => setConPass(true)}
                    onBlur={() => setConPass(false)}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-glod-color w-full text-center py-2 font-semibold rounded-md text-[#fff] hover:bg-[#b99b55]"
                >
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
