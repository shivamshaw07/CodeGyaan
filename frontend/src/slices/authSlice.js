import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token : localStorage.getItem("token") ? localStorage.getItem("token") : null,
    signUpData : null
}

const authSlice = createSlice({
    initialState,
    name : "auth",
    reducers : {
        setSignupData(state,action){
            state.signUpData = action.payload
        },
        
        setToken(state,action){
            state.token = action.payload
        }
    }
})

export const {setToken, setSignupData} = authSlice.actions
export default authSlice.reducer