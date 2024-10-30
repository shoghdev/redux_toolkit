import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IStatus, IUpdateAction } from "./types";
import { getTask, getTasks, updateTaskStatus } from "./tasks.api";

const initialState: IState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTasks.fulfilled, (state: IState, action) => {
                state.tasks = action.payload
            })
            .addCase(getTask.fulfilled, (state: IState, action) => {
                console.log(action.payload)
                state.tasks = action.payload
            })
            .addCase(updateTaskStatus.fulfilled, (state: IState, action: PayloadAction<IUpdateAction>) => {
                const task = state.tasks.find(task => task.id === action.payload.id)

                if (task) {
                    task.status = action.payload.status
                }
            })
    }
})

export const reducer = taskSlice.reducer
//export const {updateTask} = taskSlice.actions