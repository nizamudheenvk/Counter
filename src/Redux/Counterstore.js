import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/CounterSlice"
const counterStore = configureStore({
    reducer :{
        counterReducer : counterSlice

    }
})
export default counterStore