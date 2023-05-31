import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import additionSubtractionSlice from "./slices/additionSubtractionSlice";


const store = configureStore({
    reducer: {
        counter: counterSlice,
        addSub: additionSubtractionSlice
    }
});

export default store;