import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        {id:101, name:"John", gender: "male", salary:250000},
        {id:102, name:"Jim", gender: "male", salary:550000},
        {id:103, name:"Ann", gender: "female", salary:450000},
        {id:104, name:"Ella", gender: "female", salary:600000},
    ]
}

export const UserSlice = createSlice({
    name:"Users",
    initialState,
    reducers: {
        salaryUp: function(state,action) {
            const person = state.items.find(user=>user.id == action.payload)
            if(person) {
                person.salary += 50000
            }
        },
        salaryDown: function(state,action) {
            const person = state.items.find(user=>user.id == action.payload)
            if(person && person.salary > 0) {
                person.salary -= 50000
            }
        },
        deleteUser: function(state,action) {
            state.items = state.items.filter(user=>user.id !== action.payload)
        },
    }
})

export const reducer = UserSlice.reducer
export const {salaryUp, salaryDown,deleteUser} = UserSlice.actions