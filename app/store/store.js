import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slice/settingsSlice";
import coinsReducer from './slice/getCoinsSlice'

export let store = null;
export default function getStore(incomingPreloadState) {
    store = configureStore({
        reducer:{
            settings: settingsReducer,
            coins:coinsReducer
         },
         preloadedState: incomingPreloadState,
    });
    return store;
  }