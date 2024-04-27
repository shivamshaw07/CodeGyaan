import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    course : null
}

const courseSlice = createSlice({
    initialState : initialState,
    name : "course",
    reducers : {
        setCourse(state,action){
            state.course = action.payload
        }
    }
})

export const {setCourse} = courseSlice.actions
export default courseSlice.reducer