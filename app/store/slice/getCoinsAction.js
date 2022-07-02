import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoins = createAsyncThunk(
  "axios/getCoins",
  async (arg, thunkAPI) => {
    try {
         const response = await axios.get(`https://api.coincap.io/v2/assets?limit=20&offset=${arg}`).then(response => {
        return response.data
      })
    
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
   
  }
);

export const getExchanges = createAsyncThunk(
  "axios/getExchanges",
  async (arg, thunkAPI) => {
    try {
         const response = await axios.get(`https://api.coincap.io/v2/exchanges`).then(response => {
        return response.data
      })
    
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
   
  }
);