import { createSlice } from "@reduxjs/toolkit";
import { logInOut } from "./authSlice";
const initState = { value: 2 };

const counterSlice = createSlice({
    name:'counter',
    initialState:initState,
    reducers:{
        add: (state, action) => {
            state.value = state.value + action.payload;
        },
        sub: (state, action) => {
            state.value -= action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logInOut, (state, action) => {
            state.value = action.payload;
        });
    },
});

export const { add, sub } = counterSlice.actions;

export default counterSlicer.reducer;