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

export const getHistory = createAsyncThunk(
  "axios/getHistory",
  async (arg, thunkAPI) => {
   let dateOffset = (1*60*60*1000) ; 
    let myDate = new Date();

    let end = myDate.setTime(myDate.getTime());
    
    let data = new Date()
   let start;
    switch (arg.interval) {
      case 'h1':
         start = data.setDate(data.getDate() - 1);
         break
        case 'd1':
          start = data.setDate(data.getDate() - 30);
          break
      default:
        break;
    }
 
    try {
         const response = await axios.get(`https://api.coincap.io/v2/assets/${arg.id}/history?interval=${arg.interval}&start=${start}&end=${end}`).then(response => {
        return response.data
      })
    
    return {
      id:arg.id,
      data: response.data
    }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
   
  }
);