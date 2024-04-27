import { apiConneector } from "../apiConnector";
import { profileEndPoints } from "../api";
import toast from "react-hot-toast";
import { setUser } from "../../slices/profileSlice";
import { setLoading } from "../../slices/UIslice";
import { logout } from "./authOpertaion";

export const updatePic = (image) => {
    return async(dispatch) =>{
        dispatch(setLoading(true));
        try {
            const formData = new FormData();
            const user = JSON.parse(localStorage.getItem("user"))
            formData.append("image", image);
            formData.append("id", user._id);
            formData.append("token", localStorage.getItem("token"));
            for (const [key, value] of formData.entries()) {
                console.log(key, value);
            }
            const res = await apiConneector("post",profileEndPoints.updatePic, formData);
            console.log(res.data);
            if(res?.data?.success){
                toast.success(res?.data?.message);
                dispatch(setUser(res?.data?.user))
                dispatch(setLoading(false));
                return true
            }
            else{
                toast.error(res?.data?.message);
                dispatch(setLoading(false));
                return false
            }

        } catch (error) {
            if(error.response?.data?.success === 'Token is invalid' || error.response?.data?.success === 'Token not found'){
                toast.error(error?.response?.data?.message);
                dispatch(setLoading(false));
                logout();
                return false
            }
            toast.error(error?.response?.data?.message);
            dispatch(setLoading(false));
            return false
        }
        
    }
}

export const updateProfile = (uploading) => {
    return async(dispatch) => {
        dispatch(setLoading(true));
        try {
            const token = localStorage.getItem("token");
            const {_id} = JSON.parse(localStorage.getItem("user"));
            const id = _id;
            const res = await apiConneector("post",profileEndPoints.updatePofile,{ ...uploading,token,id},{new:true});
            if(res?.data?.success){
                toast.success(res?.data?.message);
                dispatch(setUser(res?.data?.user))
                dispatch(setLoading(false));
                return true
            }
        } catch (error) {
            if(error.response?.data?.success === 'Token is invalid' || error.response?.data?.success === 'Token not found'){
                toast.error(error?.response?.data?.message);
                dispatch(setLoading(false));
                sidpatch(logout())
                return false
            }
            toast.error(error?.response?.data?.message)
            dispatch(setLoading(false));
        }
    }
}