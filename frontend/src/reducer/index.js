import {combineReducers} from '@reduxjs/toolkit'
import cartSlice from '../slices/cartSlice'
import authSlice from '../slices/authSlice'
import profileSlice from '../slices/profileSlice'
import UIslice from '../slices/UIslice'
import courseSlice from '../slices/courseSlice'
import viewCourseSlice from '../slices/viewCourseSlice'

const rootReducer = combineReducers({
    auth : authSlice,
    cart : cartSlice,
    profile : profileSlice,
    ui : UIslice,
    course : courseSlice,
    viewCourse : viewCourseSlice
})

export default rootReducer