import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getBooks = createAsyncThunk("books/get", async()=>{
    const resposne = await axios.get("http://localhost:3004/books")
    return resposne.data
})

export const getBook =  createAsyncThunk("book/get", async(id)=>{
    const resposne = await axios.get("http://localhost:3004/books/"+id)
    return resposne.data
})