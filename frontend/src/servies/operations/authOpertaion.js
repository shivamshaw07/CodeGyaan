import { apiConneector } from "../apiConnector";
import { authEndPoints } from "../api";
import { toast } from "react-hot-toast";
import { setSignupData, setToken } from "../../slices/authSlice";
import { setAccountType, setUser } from "../../slices/profileSlice";
import { setLoading } from "../../slices/UIslice";

export const login = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const res = await apiConneector("post", authEndPoints.login, { email, password })
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("id", res.data.user._id)
        dispatch(setToken(res?.data?.token));
        dispatch(setUser(res?.data?.user));
        dispatch(setAccountType(res?.data?.user?.accountType))
        toast.success("Login Successful");
        dispatch(setLoading(false));
        navigate("/");
        return true
    } catch (error) {
        toast.error(error?.response?.data?.message);
        dispatch(setLoading(false));
        return fasle
    }
};
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    localStorage.removeItem("user");
    dispatch(setUser(null));
    localStorage.removeItem("accountType");
    dispatch(setAccountType(null))
    toast.success("Logout Successful");
  };
};

export const sendOtp = (email, navigate, changeField) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await apiConneector("post", authEndPoints.sendOTP, { email });
      console.log(res.data);
      if (res?.data?.success) {
        dispatch(setSignupData(changeField));
        navigate("/verify-email");
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    dispatch(setLoading(false));
  };
};

export const signup = (data, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await apiConneector("post", authEndPoints.signup, {
        ...data,
      });
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/login");
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

    dispatch(setLoading(false));
  };
};
