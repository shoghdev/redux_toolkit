import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IStatus, ITask, IUpdateAction } from "./types";

export const getTasks = createAsyncThunk("get/tasks",async()=>{
    const response = await axios.get("http://localhost:3004/tasks")
    return response.data
})

export const getTask = createAsyncThunk("get/task", async(task:ITask)=>{
    const response = await axios.get(`http://localhost:3004/tasks/${task.id}`)
    return response.data
})

export const updateTaskStatus = createAsyncThunk<IUpdateAction, { id: number | string; status: IStatus }>(
    "patch/task",async ({ id, status }) => {
        const response = await axios.patch(`http://localhost:3004/tasks/${id}`, { status });
        return response.data
    }
)