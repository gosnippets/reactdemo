import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import additionSubtractionSlice from "./slices/additionSubtractionSlice";
import accountSlice from "./slices/accountSlice";
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

const middleware = [logger, thunkMiddleware]
const store = configureStore({
    reducer: {
        counter: counterSlice,
        addSub: additionSubtractionSlice,
        accounts: accountSlice,
    },
    middleware
});

export default store;