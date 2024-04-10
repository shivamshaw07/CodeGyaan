import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

const profileSlice = createSlice({
    initialState : initialState,
    name : "profile",
    reducers:{

        setUser(state,action){
            state.user = action.payload
            localStorage.setItem("user",JSON.stringify(action.payload))
        }
    }
})

export const {setUser} = profileSlice.actions
export default profileSlice.reducer