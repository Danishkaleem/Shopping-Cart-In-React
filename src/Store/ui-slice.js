import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{cartIsVisible:false},
    reducers:{  //map of methods
        toggle(state){
            state.cartIsVisible=! state.cartIsVisible
        }
    }
})


export const uiActions=uiSlice.actions

export default uiSlice