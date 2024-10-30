import axios from "axios";
import { createAppSlice } from "../../app/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: ISatate = {
    list:[]
}

export const userSlice = createAppSlice({
    name:"users",
    initialState,
    reducers: create => ({
        deleteUser: create.asyncThunk(
            async (user:IUser) => {
                const response = await axios.delete("http://localhost:3004/users/"+ user.id)
                return response.data
            },
            {
                fulfilled: (state,action:PayloadAction<IUser>)=>{
                    state.list = state.list.filter((user) => user.id !== action.payload.id)
                }
            }
        ),
        getAllUsers: create.asyncThunk(
            async () => {
                const response = await axios.get("http://localhost:3004/users")
                return response.data
            },
            {
                fulfilled: (state,action:PayloadAction<IUser[]>)=>{
                    state.list = action.payload
                }
            }
        )
    }),
    selectors: {
        users: state => state.list
    }

})

export const {users} = userSlice.selectors
export const {getAllUsers,deleteUser} = userSlice.actions