import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./feautures/usrs/users.slice";

export const store = configureStore({
    reducer: UserReducer
})