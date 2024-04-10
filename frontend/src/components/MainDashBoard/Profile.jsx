import React from "react";
import "../../App.css";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Profile = () => {
  const {user} = useSelector(state => state.profile)
  return (
    <div className="w-[80%] h-[81vh] overflow-hidden hover:overflow-y-scroll profile pb-[10vh] pt-[5vh] mt-1">
      <div className="w-[90%] mx-auto flex flex-col gap-[10vh]">
        <h1 className="text-4xl text-white font-bold">
          My <span className="text-glod-color">Profile</span>.
        </h1>
        <div className="flex w-full justify-between items-center bg-black-bg px-[3rem] py-[2rem] rounded-lg shadow border border-[#898989]">
          <div className="flex justify-start items-center gap-2 text-white">
            {/* <div className="bg-red-600  rounded-full w-[76px] py-[22px] text-center font-semibold text-2xl">
              SS
            </div> */}
            <img src={user?.image} alt="profile" className="h-[13vh] w-[13vh] rounded-full"/>
            <div>
              <h1 className="font-semibold text-xl">{user?.firstName} {user?.lastName}</h1>
              <p className="text-white/40">{user?.email}</p>
            </div>
          </div>
          <Link to={'/dashboard/setting'}>
                <button className="py-2 px-6 bg-[#cbab61] rounded font-semibold text-white hover:bg-[#b99b55]">
                Edit{" "}
                <FiEdit style={{ display: "inline", margin: "0 0 5px 5px" }} />
                </button>
            </Link>
        </div>
        <div className="flex w-full justify-between items-center bg-black-bg px-[3rem] py-[2rem] rounded-lg shadow border border-[#898989]">
          <div className="flex flex-col justify-start items-start gap-2 text-white">
            <h1 className="font-semibold text-xl">About</h1>
            <p className="text-white/40">{user.about ? user.about : "Write something about yourself"}</p>
          </div>
          <Link to={'/dashboard/setting'}>
                <button className="py-2 px-6 bg-[#cbab61] rounded font-semibold text-white hover:bg-[#b99b55]">
                Edit{" "}
                <FiEdit style={{ display: "inline", margin: "0 0 5px 5px" }} />
                </button>
            </Link>
        </div>
        <div className="flex flex-col w-full justify-start items-start gap-[4vh] bg-black-bg px-[3rem] py-[2rem] rounded-lg shadow border border-[#898989]">
          <div className="flex justify-between items-center gap-2 text-white w-full">
            <h1 className="font-semibold text-xl">Personal Details</h1>
            <Link to={'/dashboard/setting'}>
                <button className="py-2 px-6 bg-[#cbab61] rounded font-semibold text-white hover:bg-[#b99b55]">
                Edit{" "}
                <FiEdit style={{ display: "inline", margin: "0 0 5px 5px" }} />
                </button>
            </Link>
          </div>
          <div className="w-full flex text-white gap-[10vw]">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-white/20">First Name</div>
                        <div className="font-semibold">{user?.firstName} </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-white/20">Email</div>
                        <div className="font-semibold">{user?.email}</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-white/20">Gender</div>
                        <div className="font-semibold">Male</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-white/20">Last Name</div>
                        <div className="font-semibold">{user?.lastName}</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-white/20">Phone Number</div>
                        <div className="font-semibold">{user?.contactNumber ? user.contactNumber : "phone"}</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-white/20">Date of Birth</div>
                        <div className="font-semibold">{user?.dob ? user.dob.slice(0,10) : "dob"}</div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
