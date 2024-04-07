import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading : false
}

const profileSlice = createSlice({
    initialState : initialState,
    name : "profile",
    reducers:{
        setLoading(state,action){
            state.loading = action.payload
        },
        setUser(state,action){
            state.user = action.payload
            localStorage.setItem("user",JSON.stringify(action.payload))
        }
    }
})

export const {setLoading, setUser} = profileSlice.actions
export default profileSlice.reducer