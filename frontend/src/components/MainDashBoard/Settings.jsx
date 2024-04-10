import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { updatePic, updateProfile } from "../../servies/operations/updateProfile";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Settings = () => {
  const [image, setImage] = useState();
  const [uploading, setUploading] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "male",
    contactNumber: "",
    about: "",

  });
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const uploadPic = () => {
    if (!image) {
      toast.error("Please select an image");
      return;
    }
    dispatch(updatePic(image));
  };
  const onValueChange = (e) => {
    setUploading({ ...uploading, [e.target.name]: e.target.value });
  }

  const formSubmitHandler = (e) =>{
    e.preventDefault()
    dispatch(updateProfile(uploading))
  }
  return (
    <div className="w-[80%] h-[81vh] overflow-hidden hover:overflow-y-scroll profile pb-[10vh] pt-[5vh] mt-1">
      <div className="w-[90%] mx-auto flex flex-col gap-[5vh]">
        <h1 className="text-4xl text-white font-bold">
          Edit <span className="text-glod-color">Profile</span>.
        </h1>
        <div className="flex w-full justify-between items-center bg-black-bg px-[3rem] py-[2rem] rounded-lg shadow border border-[#898989]">
          <div className="flex justify-start items-center gap-2 text-white">
            {/* <div className="bg-red-600  rounded-full w-[76px] py-[22px] text-center font-semibold text-2xl">
              SS
            </div> */}
            <img
              src={image ? URL.createObjectURL(image) : user?.image}
              alt="profile"
              className="h-[13vh] w-[13vh] rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-xl">Change Your Profile</h1>
              <div className="flex gap-3">
                <input
                  type="file"
                  accept=".jpeg, .png, .jpg"
                  className="py-[3px] bg-[#cbab61] rounded font-semibold text-white hover:bg-[#b99b55] w-[250px]"
                  placeholder="select"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <button
                  onClick={uploadPic}
                  className="py-[3px] px-4 bg-[#5d5c5b] rounded font-semibold text-white/70 hover:bg-[#b8b2b2]"
                >
                  Upload{" "}
                  <FiUpload
                    style={{ display: "inline", margin: "0 0 5px 5px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={formSubmitHandler}>
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
                    name="firstName"
                    onChange={(e)=>onValueChange(e)}
                    placeholder={user?.firstName}
                    className="w-full bg-[#41454a] p-2 rounded-lg"
                    style={{ borderBottom: "1.5px solid white" }}
                  />
                </div>
                <div className="flex flex-col text-white">
                  <label htmlFor="first">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    onChange={(e)=>onValueChange(e)}
                    placeholder="dd-mm-yyyy"
                    className="w-full bg-[#41454a] p-2 rounded-lg"
                    style={{ borderBottom: "1.5px solid white" }}
                  />
                </div>
                <div className="flex flex-col text-white">
                  <label htmlFor="first">Conatct Number</label>
                  <input
                    type="number"
                    name="contactNumber"
                    onChange={(e)=>onValueChange(e)}
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
                    name="lastName"
                    onChange={(e)=>onValueChange(e)}
                    placeholder={user?.lastName}
                    className="w-full bg-[#41454a] p-2 rounded-lg"
                    style={{ borderBottom: "1.5px solid white" }}
                  />
                </div>
                <div className="flex flex-col text-white">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    onChange={(e)=>onValueChange(e)}
                    className="w-full bg-[#41454a] p-2 rounded-lg"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col text-white">
                  <label htmlFor="about">About</label>
                  <input
                    type="text"
                    name="about"
                    onChange={(e)=>onValueChange(e)}
                    placeholder="Enter Bio Details"
                    className="w-full bg-[#41454a] p-2 rounded-lg"
                    style={{ borderBottom: "1.5px solid white" }}
                  />
                </div>
              </div>
            </div>
          <div className="w-full flex justify-end items-end mt-[5vh] gap-2">
            <button className="py-[3px] px-4 bg-[#5d5c5b] rounded font-semibold text-white/70 hover:bg-[#b8b2b2]">
              cancel
            </button>
            <button type ="submit" className="py-[3px] px-4 bg-glod-color rounded font-semibold text-white/70 hover:bg-[#b99b55]">
              Save
            </button>
          </div>
          </div>
        </form>
        <div className="flex flex-col w-full justify-start items-start bg-[#ff2a2a91] px-[3rem] py-[2rem] gap-[2vh] rounded-lg shadow border border-[#898989]">
          <RiDeleteBin6Line
            style={{
              fontSize: "40px",
              padding: "5px",
              backgroundColor: "cb6b6b91",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
