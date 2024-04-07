import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token : localStorage.getItem("token") ? localStorage.getItem("token") : null,
    loading : false,
    signUpData : null
}

const authSlice = createSlice({
    initialState : initialState,
    name : "auth",
    reducers : {
        setSignupData(state,action){
            state.signUpData = action.payload
        },
        setLoading(state,action){
            state.loading = action.payload
        },
        setToken(state,action){
            state.token = action.payload
            console.log(state.token);
        }
    }
})

export const {setLoading, setToken, setSignupData} = authSlice.actions
export default authSlice.reducer