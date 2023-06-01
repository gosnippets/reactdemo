import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../../constants/Constatnts";

export const getAllAccounts = createAsyncThunk("account/getAllAccount", async () => {
    const response = await axios.get(API_BASE_URL + "list");
    console.log("Response", response.data)
    return response.data;
})

const accountSlice = createSlice({
    name: "accounts",
    initialState: { total: 1500, accounts: {}, status: 'idle', error: null },
    reducers: {
        addition: (state, action) => {
            state.total += Number(action.payload);
        },
        subtraction: (state, action) => {
            state.total -= Number(action.payload);
        }
    },
    extraReducers: {
        [getAllAccounts.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllAccounts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.accounts = action.payload;
        },
        [getAllAccounts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export const { addition, subtraction } = accountSlice.actions
export default accountSlice.reducer
