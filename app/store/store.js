import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slice/settingsSlice";


export const store = configureStore({
    reducer:{
       settings: settingsReducer
    }
})