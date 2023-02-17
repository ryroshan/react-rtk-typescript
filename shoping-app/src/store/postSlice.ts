import { POST, PostState } from './../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from '../actions/getPosts';


// slice 
const initialState = {
    loading: false,
    error: null,
    data: null
} as PostState;

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers : {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(getPosts.fulfilled, (state, action: PayloadAction<POST[]>)=>{
            state.loading = false;
            state.data = action.payload
        })
        .addCase(getPosts.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload
        })
    }

})

export default postSlice;

