import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import settingsReducer from "./slice/settingsSlice";
import coinsReducer from './slice/getCoinsSlice'

const makeStore = () =>  configureStore({
        reducer:{
            settings: settingsReducer,
            coins:coinsReducer
         },
         devTools: true
    });
    export const store = makeStore()
    
    export const wrapper = createWrapper(makeStore);