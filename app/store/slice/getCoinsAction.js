import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoins = createAsyncThunk(
  "axios/getCoins",
  async (arg, thunkAPI) => {
    try {
      const response = await axios
        .get(`https://api.coincap.io/v2/assets?limit=20&offset=${arg}`)
        .then((response) => {
          return response.data;
        });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getExchanges = createAsyncThunk(
  "axios/getExchanges",
  async (arg, thunkAPI) => {
    try {
      const response = await axios
        .get(`https://api.coincap.io/v2/exchanges`)
        .then((response) => {
          return response.data;
        });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getHistory = createAsyncThunk(
  "axios/getHistory",
  async (arg, thunkAPI) => {
    let myDate = new Date();

    let end = myDate.setTime(myDate.getTime());

    let data = new Date();
    let start = data.setDate(data.getDate() - 1);
    switch (arg.day) {
      case "h1":
        start = data.setDate(data.getDate() - 1);
        break;
        case "w1":
        start = data.setDate(data.getDate() - 8);
        break;
      case "d1":
        start = data.setDate(data.getDate() - 31);
        break;
      case "m3":
        start = data.setDate(data.getDate() - 91);
        break;
        case "m6":
          start = data.setDate(data.getDate() - 181);
          break;
        case "1y":
          start = data.setDate(data.getDate() - 366);
          break;
      default:
        break;
    }
 
    try {
      const response = await axios
        .get(
          `https://api.coincap.io/v2/assets/${arg.id}/history?interval=${arg.interval}&start=${start}&end=${end}`
        )
        .then((response) => {
          return response.data;
        });

      return {
        id: arg.id,
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
