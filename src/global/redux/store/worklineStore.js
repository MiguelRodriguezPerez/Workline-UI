import { configureStore } from "@reduxjs/toolkit";
import { loggedUserSlice } from "../slices/loggedUser";

export const worklineStore = configureStore({
    reducer: {
        loggedUser :  loggedUserSlice.reducer
    },
})