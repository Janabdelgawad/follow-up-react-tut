import { createSlice } from "@reduxjs/toolkit";
import authSlice from "./authSlice";


const authSlice = createSlice({
    name:'auth',
    initialState: { isLogged: false},
    reducers:{
        logInOut: (state) => {
            state.isLogged = !state.isLogged;
        },
    },
});

export const { logInOut } = authSlice.actions;

export default authSlice.reducer;