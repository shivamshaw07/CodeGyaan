import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalPrice: localStorage.getItem("totalPrice")
    ? JSON.parse(localStorage.getItem("totalPrice"))
    : 0,
  totalItem: localStorage.getItem("totalItem")
    ? JSON.parse(localStorage.getItem("totalItem"))
    : 0,
};

const cartSlice = createSlice({
  initialState: initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      const course = action.course;
      const courseIndex = state.cart.findIndex(
        (item) => item._id === course._id
      );
      if (courseIndex < 0) {
        toast.error("Course Already Added");
        return;
      }
      state.cart.push(course);
      state.totalPrice += course.totalPrice;
      state.totalItem++;
      localStorage.setItem("cart", state.cart);
      localStorage.setItem("totalPrice", state.totalPrice);
      localStorage.setItem("totalItem", state.totalItem);
      toast.success("Course Added Successfully");
    },
    removeFromCart(state, action) {
      const course = action.course;
      const courseIndex = state.cart.findIndex(
        (item) => item._id === course._id
      );
      if (courseIndex < 0) {
        toast.error("Course Doent Exist");
        return;
      }
      state.cart.splice(courseIndex, 1);
      state.totalPrice -= course.totalPrice;
      state.totalItem--;
      localStorage.setItem("cart", state.cart);
      localStorage.setItem("totalPrice", state.totalPrice);
      localStorage.setItem("totalItem", state.totalItem);
      toast.success("Course Removed Successfully");
    },
    resetCart(state) {
      state.cart = [];
      state.totalItem = 0;
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", state.totalPrice);
      localStorage.setItem("totalItem", state.totalItem);
      toast.success("Cart reset");
    },
  },
});

export const {addToCart,removeFromCart,resetCart} = cartSlice.actions
export default cartSlice.reducer