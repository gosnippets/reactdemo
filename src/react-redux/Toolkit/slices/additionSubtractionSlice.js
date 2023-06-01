import { createSlice } from "@reduxjs/toolkit";


const additionSubtractionSlice = createSlice({
    name: "additionSubtraction",
    initialState: { total: 500 },
    reducers: {
        addition: (state, action) => {
            state.total += Number(action.payload);
        },
        subtraction: (state, action) => {
            state.total -= Number(action.payload);
        }
    }
})

export const { addition, subtraction } = additionSubtractionSlice.actions
export default additionSubtractionSlice.reducer