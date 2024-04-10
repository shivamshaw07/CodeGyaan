import {combineReducers} from '@reduxjs/toolkit'
import cartSlice from '../slices/cartSlice'
import authSlice from '../slices/authSlice'
import profileSlice from '../slices/profileSlice'
import UIslice from '../slices/UIslice'

const rootReducer = combineReducers({
    auth : authSlice,
    cart : cartSlice,
    profile : profileSlice,
    ui : UIslice
})

export default rootReducer