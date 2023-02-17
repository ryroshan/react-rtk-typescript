import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { POST } from '../types/types';

const JSON_API = 'https://fakestoreapi.com/products';


// Action
export const getPosts = createAsyncThunk(
    '/posts/getPosts',
        async (data, thunkApi) =>{
            try{
                const res = await axios.get<POST[]>(JSON_API);
                return res.data;
            }catch(err:any){
                return thunkApi.rejectWithValue(err.message)
            }
        }
)
