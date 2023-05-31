import { createSlice } from "@reduxjs/toolkit";


const additionSubtractionSlice = createSlice({
    name: "additionSubtraction",
    initialState: { total:500},
    reducers: { 
        addition: (state,action) => {
            console.log("Action", action, state)
            state.total+=action.payload;
        },
        subtraction: (state) => {
            state.count--;
        }
    }
})

export const {addition, subtraction} = additionSubtractionSlice.actions
export default additionSubtractionSlice.reducer