import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../../constants/Constatnts";

export const getAllAccounts = createAsyncThunk("account/getAllAccount", async () => {
    const response = await axios.get(API_BASE_URL + "list");
    return response.data;
});

export const getAccountDetails = createAsyncThunk("account/getAccountDetails", async (id) => {
    const response = await axios.get(API_BASE_URL + id);
    return response.data;
});

export const createAccount = createAsyncThunk("account/createAccount", async (data) => {
    const response = await axios.post(API_BASE_URL + "addaccount", data);
    return response.data;
});

export const updateAccount = createAsyncThunk("account/updateAccount", async (data) => {
    const response = await axios.put(API_BASE_URL + data.id, data.data);
    return response.data;
});

const accountSlice = createSlice({
    name: "accounts",
    initialState: { total: 1500, account: {}, accounts: {}, status: 'idle', error: null },
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
            state.account ={};
        },
        [getAllAccounts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [getAccountDetails.pending]: (state) => {
            state.status = 'loading'
        },
        [getAccountDetails.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.account = action.payload;
        },
        [getAccountDetails.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [createAccount.pending]: (state) => {
            state.status = 'loading'
        },
        [createAccount.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.accounts = action.payload;
        },
        [createAccount.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [updateAccount.pending]: (state) => {
            state.status = 'loading'
        },
        [updateAccount.fulfilled]: (state, action) => {
            state.status = 'updated';
        },
        [updateAccount.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export const { addition, subtraction } = accountSlice.actions
export default accountSlice.reducer
