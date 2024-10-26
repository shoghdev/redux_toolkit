import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk("comments/get", async(id)=>{
    const resposne = await axios.get("http://localhost:3004/comments?book="+id)
    return resposne.data
})

export const addComment = createAsyncThunk("comments/post", async(data)=>{
    const resposne = await axios.post("http://localhost:3004/comments?book=", data)
    return resposne.data
})