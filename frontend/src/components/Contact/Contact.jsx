import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { MdCall, MdMail } from "react-icons/md";
import contactus from "../../assets/Call center-cuate.png";
import Review from "../About/Review";

const Contact = () => {
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [numActive, setNumActive] = useState(false);
  const [messageActive, setMessageActive] = useState(false);
  return (
    <div className="w-full h-[100vh]">
      <NavBar />
      <div className="w-[85vw] mx-auto flex justify-between items-start py-[10vh] gap-[8vw] h-full">
        <div className="flex flex-col justify-start items-start gap-2 w-[50%]">
          <h1 className="text-white text-4xl font-bold">Contact <span className="text-glod-color">Us</span>.</h1>
          <p className="text-white text-lg font-light">
            For any queries, Please reach out to us. Our Support team will get
            back to you within 24 hours.
          </p>
          <p className="flex justify-center gap-2 items-center text-white/80">
            <MdMail /> <span>support@codegyaan.com</span>
          </p>
          <p className="flex justify-center gap-2 items-center text-white/80">
            <MdCall />
            <span>+91 8867917516</span>
          </p>
          <div className="w-[65%] flex justify-center items-start ">
            <img src={contactus} alt="contactus" className="w-full" />
          </div>
        </div>
        <div className="w-[50%] shadow-black shadow-lg p-10 h-full">
          <form className="w-full flex flex-col gap-4 justify-start  h-full">
            <h1 className="text-4xl text-white font-semibold">
              Got an <span className="text-glod-color">Idea</span>? We've got the skills. Let's team up
            </h1>
            <p className="text-white/80">
              Tell us more about yourself and what you're got in mind.
            </p>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col gap-1 h-[8vh] justify-end">
                
                  {nameActive && <label
                    htmlFor="name"
                    className="text-xs text-white/80 transition-all duration-400"
                  >
                    Full Name
                  </label>}
                
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your fullname"
                  className=" border-2 border-white px-2 py-1 rounded text-white transition-all duration-400"
                  style={{ borderBottom: "1px solid white" }}
                  onFocus={() => setNameActive(true)}
                  onBlur={() => setNameActive(false)}
                />
              </div>
              <div className="flex flex-col gap-1 h-[8vh] justify-end">
              {emailActive && <label className="text-xs text-white/80" htmlFor="email">
                  Email
                </label>}
                 
                  <input
                    type="eamil"
                    id="email"
                    placeholder="Enter your Email"
                    className=" border-2 border-white px-2 py-1 rounded text-white"
                    style={{ borderBottom: "1px solid white" }}
                    onFocus={() => setEmailActive(true)}
                    onBlur={() => setEmailActive(false)}
                  />
              </div>
              <div className="flex flex-col gap-1 h-[8vh] justify-end">
                {numActive && (
                  <label className="text-xs text-white/80" htmlFor="number">
                    Enter your Number
                  </label>
                )}{" "}
                <input
                  type="number"
                  id="number"
                  placeholder="Enter your Number"
                  className=" border-2 border-white px-2 py-1 rounded text-white"
                  style={{ borderBottom: "1px solid white" }}
                  onFocus={() => setNumActive(true)}
                  onBlur={() => setNumActive(false)}
                />
              </div>
              <div className="flex flex-col gap-1 h-[10vh] justify-end">
                {messageActive && (
                  <label className="text-xs text-white/80" htmlFor="message">
                    Enter your Message
                  </label>
                )}
                <textarea
                  id="number"
                  placeholder="Enter your message.."
                  className=" border-2 border-white px-2 py-1 rounded text-white bg-transparent"
                  style={{ borderBottom: "1px solid white" }}
                  onFocus={() => setMessageActive(true)}
                  onBlur={() => setMessageActive(false)}
                />
              </div>
            </div>
            <button className="bg-glod-color w-full text-center py-2 font-semibold rounded-md text-[#fff] hover:bg-[#b99b55]">
              Send
            </button>
          </form>
        </div>
      </div>
      <Review/>
      <Footer />
    </div>
  );
};

export default Contact;
