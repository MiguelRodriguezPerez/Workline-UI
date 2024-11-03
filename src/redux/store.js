import { configureStore } from "@reduxjs/toolkit";
import { contrataSlice } from "./user/contrataSlice";

export const store = configureStore({
    reducer: {
        contrata_user: contrataSlice.reducer
    }
})