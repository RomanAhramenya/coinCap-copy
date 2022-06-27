import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoins = createAsyncThunk(
  "axios/getCoins",
  async (arg, thunkAPI) => {
    try {
         const response = await axios.get(`https://api.coincap.io/v2/assets`).then(response => {
        return response.data
      })
    
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
   
  }
);
