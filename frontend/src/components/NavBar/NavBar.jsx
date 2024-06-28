import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { BsCart4 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown, FaIdCardAlt } from "react-icons/fa";
import CourseList from "./CourseList";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiDashboard2Line } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux'
import { setToken } from "../../slices/authSlice";
import { logout } from "../../servies/operations/authOpertaion";
import { setLoading } from "../../slices/UIslice";
import { getCart } from "../../servies/operations/cartOperation";
import toast from "react-hot-toast";

const NavBar = () => {
  const [dashboardActive, setDashboardActive] = useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth)
  const {user} = useSelector(state => state.profile)
  const {totalItem} = useSelector(state => state.cart)
  const {cart} = useSelector(state => state.cart)
  const navigate = useNavigate();
  useEffect(() => {
    if(token){
      dispatch(setToken(token))
    }
  },[token])

  const logoutHandler = () =>{
    dispatch(logout());
    navigate('/login');
  }

  const getCartHandler = async() => {
    dispatch(setLoading(true));
    await getCart(dispatch,setLoading,toast);
    dispatch(setLoading(false));
    console.log(cart);
    navigate("/dashboard/your-cart");
  };
  return (
    <div className="h-[19vh] max-w-[100vw] overflow-x-hidden py-4 flex flex-col gap-4 shadow-md shadow-black">
      <div className="flex justify-between items-center w-[85%] mx-auto">
        <Link to={"/"}>
          {" "}
          <h1 className="text-3xl font-bold text-white flex justify-start items-center">
            <LiaFreeCodeCamp className="text-[44px] mr-1" />
            Code<span className="text-glod-color">Gyaan</span>.
          </h1>
        </Link>
        <div className="w-[50%] relative flex justify-center items-center  border-black bg-black-bg text-white rounded-xl">
          <IoSearch className="px-3 text-[2.6rem] bg-glod-color rounded-l-xl group hover:bg-[#b99b55] cursor-pointer " />
          <input
            type="text"
            className="w-full allunset h-full border-none rounded-lg px-4"
            placeholder="Search by product title"
          />
        </div>
        {!token && (
          <div className="flex bg-[#cbab61] px-5 py-2 rounded hover:bg-[#b99b55] text-white">
            <Link to={"/login"}>
              <div className="text-base hover:cursor-pointer font-medium">
                Login /
              </div>
            </Link>
            <Link to={"/signin"}>
              <div className="text-base hover:cursor-pointer font-medium">
                &nbsp;Signin
              </div>
            </Link>
          </div>
        )}
        {token && (
          <div className="flex justify-center items-center gap-1 text-white py-1">
            {user?.accountType === "Student" && <div onClick={getCartHandler} className={"flex justify-center items-center cursor-pointer group relative"}>
              <BsCart4 style={{ fontSize: "20px" }} />
              <div className="absolute bg-yellow-300 w-[14px] h-[14px] text-[10px] text-center -top-1 -right-1 text-black/50 font-bold rounded-full">{totalItem}</div>
            </div>}
            
            <div onClick={
                  dashboardActive
                    ? () => setDashboardActive(false)
                    : () => setDashboardActive(true)
                } className="flex justify-center items-center cursor-pointer group">
              {/* <div className="bg-glod-color px-2 py-1 rounded-full">{user.firstName}</div> */}
              <img className="w-[35px] h-[35px] rounded-full" src={user?.image} alt="profile" />
              <TiArrowSortedDown style={{ fontSize: "15px" }} />
              <div
                className={dashboardActive ? "bg-[#2c2d30] absolute top-[9vh] right-[6vw] block group-hover:block hover:block  rounded-md" : "bg-[#2c2d30] absolute top-[9vh] right-[6vw] hidden group-hover:block hover:block  rounded-md"}
              >
                <NavLink to={"/dashboard/profile"}>
                  <div className="flex justify-start items-center px-3 hover:bg-slate-700 font-light py-2 rounded-md gap-1">
                    <RiDashboard2Line />
                    <div>Dashboard</div>
                  </div>
                </NavLink>
                <div className="flex justify-start items-center px-3  hover:bg-slate-700 font-light py-2 rounded-md gap-1">
                  <IoMdLogOut />
                  <div onClick={logoutHandler}>Logout</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center text-white font-normal text-base w-[85%] mx-auto">
        <Link to={"/"}>
          <div className="flex justify-center items-center">Home</div>
        </Link>
        <div className="flex justify-center items-center group cursor-pointer">
          <span>Courses </span>
          <CourseList /> <FaAngleDown className="ml-1" />{" "}
        </div>
        <div className="flex justify-center items-center">Job Portal</div>
        <Link to={"/aboutus"}>
          <div className="flex justify-center items-center">About Us</div>
        </Link>
        <Link to={"/contact-us"}>
          <div className="flex justify-center items-center">Contact Us</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
