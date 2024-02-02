import React from "react";
import { FiEdit, FiUpload } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="w-[80%] h-[81vh] overflow-hidden hover:overflow-y-scroll profile pb-[10vh] pt-[5vh] mt-1">
      <div className="w-[90%] mx-auto flex flex-col gap-[5vh]">
        <h1 className="text-4xl text-white font-bold">
          Edit <span className="text-glod-color">Profile</span>.
        </h1>
        <div className="flex w-full justify-between items-center bg-black-bg px-[3rem] py-[2rem] rounded-lg shadow border border-[#898989]">
          <div className="flex justify-start items-center gap-2 text-white">
            <div className="bg-red-600  rounded-full w-[76px] py-[22px] text-center font-semibold text-2xl">
              SS
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-xl">Change Your Profile</h1>
              <div className="flex gap-3">
                <input
                  type="file"
                  className="py-[3px] bg-[#cbab61] rounded font-semibold text-white hover:bg-[#b99b55] w-[250px]"
                  placeholder="select"
                />
                <button className="py-[3px] px-4 bg-[#5d5c5b] rounded font-semibold text-white/70 hover:bg-[#b8b2b2]">
                  Upload{" "}
                  <FiUpload
                    style={{ display: "inline", margin: "0 0 5px 5px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <form>

        <div className="flex flex-col w-full justify-start items-start bg-black-bg px-[3rem] py-[2rem] gap-[2vh] rounded-lg shadow border border-[#898989]">
          <h1 className="text-white font-semibold text-lg">
            Profile Information
          </h1>
          <div className="w-full flex justify-between items-center gap-4 ">
            <div className="w-[45%] flex flex-col gap-4">
              <div className="flex flex-col text-white ">
                <label htmlFor="first">First name</label>
                <input
                  type="text"
                  placeholder="Shivam"
                  className="w-full bg-[#41454a] p-2 rounded-lg"
                  style={{ borderBottom: "1.5px solid white" }}
                />
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="first">Date of Birth</label>
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="w-full bg-[#41454a] p-2 rounded-lg"
                  style={{ borderBottom: "1.5px solid white" }}
                />
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="first">Conatct Number</label>
                <input
                  type="number"
                  placeholder="Enter Contact Number"
                  className="w-full bg-[#41454a] p-2 rounded-lg"
                  style={{ borderBottom: "1.5px solid white" }}
                />
              </div>
            </div>
            <div className="w-[45%] flex flex-col gap-4">
              <div className="flex flex-col text-white ">
                <label htmlFor="first">Last name</label>
                <input
                  type="text"
                  placeholder="Shaw"
                  className="w-full bg-[#41454a] p-2 rounded-lg"
                  style={{ borderBottom: "1.5px solid white" }}
                />
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="first">Gender</label>
                <input
                  type="text"
                  placeholder="Male"
                  className="w-full bg-[#41454a] p-2 rounded-lg"
                  style={{ borderBottom: "1.5px solid white" }}
                />
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="about">About</label>
                <input
                  type="text"
                  placeholder="Enter Bio Details"
                  className="w-full bg-[#41454a] p-2 rounded-lg"
                  style={{ borderBottom: "1.5px solid white" }}
                />
              </div>
            </div>
          </div>
        </div>
          <div className="w-full flex justify-end items-end mt-[5vh] gap-2">
          <button className="py-[3px] px-4 bg-[#5d5c5b] rounded font-semibold text-white/70 hover:bg-[#b8b2b2]">
                  cancel
                </button>
                <button className="py-[3px] px-4 bg-glod-color rounded font-semibold text-white/70 hover:bg-[#b99b55]">
                  Save
                </button>
          </div>
        </form>
        <div className="flex flex-col w-full justify-start items-start bg-[#ff2a2a91] px-[3rem] py-[2rem] gap-[2vh] rounded-lg shadow border border-[#898989]">
            <RiDeleteBin6Line style={{fontSize:"40px", padding:"5px", backgroundColor:"cb6b6b91"}}/>
        </div>
      </div>
    </div>
  );
};

export default Settings;
