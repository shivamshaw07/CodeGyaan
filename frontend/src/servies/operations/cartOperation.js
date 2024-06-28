import { apiConneector } from "../apiConnector";
import { cartEndPoints } from "../api";
import toast from "react-hot-toast";
import { addToCart } from "../../slices/cartSlice";

export const addToCartt = async(dispatch, setLoading, id, toast) => {
    try {
        setLoading(true);
        const res = await apiConneector(
            "post",
            cartEndPoints.addToCart,
            { courseId: id, id: localStorage.getItem("id") },
            {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        );
        if(res?.data?.success) {
            toast.success(res?.data?.message);
            setLoading(false);
            console.log(res);
            dispatch(addToCart(res?.data?.cart));
        }
        else {
            toast.error(res?.data?.message);
            setLoading(false);
            console.log(res);
        }
    } catch (error) {
        setLoading(false);
        toast.error(error?.response?.data?.message);
        console.log(error);
    }
};

export const removeFromCart = async(dispatch, setLoading, id, toast) => {
  try {
    const res = await apiConneector(
      "delete",
      cartEndPoints.removeFromCart,
      { courseId: id, id: localStorage.getItem("id") },
      {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    );
    if(res?.data?.success) {
        toast.success(res?.data?.message);
        setLoading(false);
        console.log(res);
        dispatch(addToCart(res?.data?.cart));
    }
    else {
        toast.error(res?.data?.message);
        setLoading(false);
        console.log(res);
    }
    
  } catch (error) {
        setLoading(false);
        toast.error(error?.response?.data?.message);
        console.log(error);
  }
};

export const getCart = async (dispatch, setLoading, toast) => {
  try {
    const res = await apiConneector(
      "get",
      `${cartEndPoints.getCart}/${localStorage.getItem("id")}`,
      null,     
      {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    );
    if(res?.data?.success) {
        // toast.success(res?.data?.message);
        setLoading(false);
        // console.log(res);
        dispatch(addToCart(res?.data?.cart));
    }
    else {
        toast.error(res?.data?.message);
        setLoading(false);
        console.log(res);
    }
  } catch (error) {
        setLoading(false);
        toast.error(error?.response?.data?.message);
        console.log(error);
  }
};
