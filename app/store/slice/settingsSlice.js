import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isThemeDark: false,
    language: 'en',
    currency:'BYR',
    isSetting:false
}
export const settingsSlice = createSlice({
    name:'settings',
    initialState,
    reducers:{
        setIsTheme:(state,action) => {
                state.isThemeDark = action.payload
                if(action.payload == true) {
                    localStorage.setItem('themeDark','dark')
                } else {
                    localStorage.removeItem('themeDark')
                }
                
        },
        setIsLanguage:(state,action) => {
            state.language = action.payload
            localStorage.setItem('lan',action.payload)
        },
        setIsCurrency:(state,action) => {
            state.currency= action.payload
            localStorage.setItem('currency',action.payload)
        },
        setIsSetting:(state,action) => {
            state.isSetting = action.payload
        }
    }
})
export const {setIsTheme,setIsLanguage,setIsCurrency,setIsSetting} = settingsSlice.actions
export default settingsSlice.reducer