import { createSlice } from "@reduxjs/toolkit";
// import { HYDRATE } from 'next-redux-wrapper';
// // import { AppState, AppThunk } from '..';
import { getCoins, getExchanges, getHistory } from "./getCoinsAction";
const initialState = {
  isLoading: false,
  error: "",
  coins: [],
  exchanges: {
    isLoading: false,
    error: "",
    data: [],
  },
  history: {
    error: "",
    isLoading: false,
    data: {},
  },
  mainStatistic: {
    MarketCap: null,
    vol: null,
    assets: null,
    exchanges: null,
    markets: null,
    index: null,
  },
};
export const getCoinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    getStatistics: (state) => {
      if (state.coins.length > 0) {
        state.mainStatistic.MarketCap = (
          state.coins.reduce(function (accumulator, currentValue) {
            return Number(accumulator) + Number(currentValue.marketCapUsd);
          }, 0) / 1000000000000
        ).toFixed(2);
        state.mainStatistic.vol = (
          state.coins.reduce(function (accumulator, currentValue) {
            return Number(accumulator) + Number(currentValue.volumeUsd24Hr);
          }, 0) / 1000000000
        ).toFixed(2);
      }
    },
    getMarkets: (state) => {
      if (state.exchanges.data.length > 0) {
        state.mainStatistic.exchanges = state.exchanges.data.length;
      }
    },
    
  },

  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getCoins.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.error = ""),
          (state.coins = state.coins.concat(payload));
      }),
      builder.addCase(getCoins.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
      builder.addCase(getExchanges.pending, (state) => {
        state.exchanges.isLoading = true;
      }),
      builder.addCase(getExchanges.fulfilled, (state, { payload }) => {
        (state.exchanges.isLoading = false),
          (state.exchanges.error = ""),
          (state.exchanges.data = payload);
      }),
      builder.addCase(getExchanges.rejected, (state, { payload }) => {
        state.exchanges.error = payload;
        state.exchanges.isLoading = false;
      }),
      builder.addCase(getHistory.pending, (state) => {
        state.history.isLoading = true;
      }),
      builder.addCase(getHistory.fulfilled, (state, { payload }) => {
        (state.history.isLoading = false),
          (state.history.error = ""),
          (state.history.data[payload.id] = payload.data);
      }),
      builder.addCase(getHistory.rejected, (state, { payload }) => {
        state.history.error = payload;
        state.history.isLoading = false;
      });
  },
});
export const { getStatistics, getMarkets } = getCoinsSlice.actions;
export default getCoinsSlice.reducer;
