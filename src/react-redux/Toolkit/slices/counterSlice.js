import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "count",
    initialState: { count:100},
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer