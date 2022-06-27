import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCoins } from "./getCoinsAction"
const initialState = {
    isLoading:false,
    error:'',
    coins:[]
} 
export const getCoinsSlice = createSlice({
    name:'coins',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getCoins.pending,(state) => {
            state.isLoading = true
        }),
        builder.addCase(getCoins.fulfilled,(state,{payload}) => {
            state.isLoading = false,
            state.error = '',
            state.coins = state.coins.concat(payload)
        }),
        builder.addCase(getCoins.rejected,(state,{payload}) => {
            state.error = payload
            state.isLoading = false
        })
    }
}) 

export default getCoinsSlice.reducer