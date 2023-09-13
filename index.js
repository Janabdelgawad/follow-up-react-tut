import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./src/counterSlice";
import authReducer from "./src/authSlice";



const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;
