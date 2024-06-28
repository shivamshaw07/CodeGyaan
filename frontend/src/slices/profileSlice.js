import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    accountType : localStorage.getItem("accountType") ? localStorage.getItem("accountType") : null
}

const profileSlice = createSlice({
    initialState : initialState,
    name : "profile",
    reducers:{

        setUser(state,action){
            state.user = action.payload
            localStorage.setItem("user",JSON.stringify(action.payload))
        },
        setAccountType(state,action){
            state.accountType = action.payload;
            localStorage.setItem("accountType",action.payload)
        }
    }
})

export const {setUser,setAccountType} = profileSlice.actions
export default profileSlice.reducer