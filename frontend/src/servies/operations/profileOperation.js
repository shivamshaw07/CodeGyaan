import toast from "react-hot-toast";
import { apiConneector } from "../apiConnector";
import { courseEndpoints, profileEndPoints } from "../api";

export const getUserDetails =  async(token) => {
        try {
            const userData = await apiConneector("get",`${profileEndPoints.profile}/${localStorage.getItem("id")}`,token,
                {
                    Authorization : `Bearer ${token}`
                }
            )
            if(!userData?.data?.success){
                toast.error("Unable to fetch User Data");
            }
            return userData.data.data

        } catch (error) {
            console.log(error);
            toast.error(error.message);
            return null
        }
}

export const getEnrolledCourses =  async(token) => {
    try {
        const userData = await apiConneector("get",`${courseEndpoints.enrolledCourses}/${localStorage.getItem("id")}`,"",
            {
                Authorization : `Bearer ${token}`
            }
        )
        if(!userData?.data?.success){
            toast.error("Unable to fetch User Data");
        }
        return userData.data.data
    } catch (error) {
        console.log(error);
        toast.error(error.message);
        return null
    }
}