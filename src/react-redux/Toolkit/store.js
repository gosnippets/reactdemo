import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import additionSubtractionSlice from "./slices/additionSubtractionSlice";
import accountSlice from "./slices/accountSlice";


const store = configureStore({
    reducer: {
        counter: counterSlice,
        addSub: additionSubtractionSlice,
        accounts: accountSlice
    }
});

export default store;