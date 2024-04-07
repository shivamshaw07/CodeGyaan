import { apiConneector } from "../apiConnector";
import { authEndPoints } from "../api";
import {toast} from 'react-hot-toast'
import { setLoading, setSignupData, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { useSelector } from "react-redux";
import { FaAccessibleIcon } from "react-icons/fa";

export const login = (email, password,navigate) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        
            await apiConneector("post",authEndPoints.login, { email, password })
                .then((res) => {
                    localStorage.setItem("token", res.data.user);
                    dispatch(setToken(res?.data?.token));
                    dispatch(setUser(res?.data?.user))
                    toast.success("Login Successful");
                    navigate("/");
                })
                .catch((res) => {
                    toast.error(res?.data?.message);
                    console.log(err);
                })
                dispatch(setLoading(false))
    }   
}

export const logout = () =>{
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch(setToken(null));
        localStorage.removeItem("user");
        dispatch(setUser(null));
        toast.success("Logout Successful");
    }
}

export const sendOtp = (email,navigate,changeField) =>{
    return async(dispatch) => {
        dispatch(setLoading(true))
        try {
            const res = await apiConneector("post",authEndPoints.sendOTP, {email});
            console.log(res.data);
            if(res?.data?.success){
                dispatch(setSignupData(changeField))
                navigate("/verify-email")
                toast.success(res?.data?.message);
            }
            else{
                toast.error(res?.data?.message);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
        dispatch(setLoading(false))
    }
}


export const signup = (data,navigate) => {
    return async(dispatch) => {
            dispatch(setLoading(true));
            try {
                const res =await apiConneector("post",authEndPoints.signup,{
                    ...data
                })
                    if(res?.data?.success){
                        toast.success(res?.data?.message);
                        navigate("/login");
                    }
                    else{
                        toast.error(res?.data?.message);
                    }
            } catch (error) {
                toast.error(error?.response?.data?.message);
            }
        
        dispatch(setLoading(false))
    }
}
