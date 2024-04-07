import {combineReducers} from '@reduxjs/toolkit'
import cartSlice from '../slices/cartSlice'
import authSlice from '../slices/authSlice'
import profileSlice from '../slices/profileSlice'

const rootReducer = combineReducers({
    auth : authSlice,
    cart : cartSlice,
    profile : profileSlice
})

export default rootReducer