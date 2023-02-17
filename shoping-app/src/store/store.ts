import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

const reducerOne = postSlice.reducer;
const store = configureStore({
    reducer: reducerOne
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;   

export default store;