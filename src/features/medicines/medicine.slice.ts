import { createAppSlice } from "../../app/createAppSlice";
import { IMedecine, InputMedicine, IState } from "./type";
import { RootState } from "../../app/store";
import axios from "axios";
import { createSelector, PayloadAction } from "@reduxjs/toolkit";

const initialState: IState = {
    list: [],
    currentFilter: ""
}

const getList = (state: RootState) => state.medicines.list
const current = (state: RootState) => state.medicines.currentFilter

export const filterByName = createSelector([getList,current],(list,current)=>{
    if(current === "")
        return list

    return list.filter(medicine =>  medicine.name === current)
})

export const medicineSlice = createAppSlice({
    name: "medicines",
    initialState,
    reducers: create => ({
        updateFilter: create.reducer<string>(
            (state,action) => {
                state.currentFilter = action.payload
            }
        ),
        getAllMedicines: create.asyncThunk(
            async () => {
                const response = await axios.get("http://localhost:3004/medicines")
                return response.data
            },
            {
                fulfilled: (state, action: PayloadAction<IMedecine[]>) => {
                    state.list = action.payload
                }
            }
        ),
        addNewMedicine: create.asyncThunk(
            async(data:InputMedicine) => {
                const response = await axios.post("http://localhost:3004/medicines", data)
                return response.data
            },
            {
                fulfilled: (state, action: PayloadAction<InputMedicine>) => {
                    console.log(action.payload)
                    state.list.push(action.payload)
                }
            }
        )
    }),
    selectors: {
        medicines: state => state.list,
        total: state => state.list.reduce((a,b) => a + b.price, 0),
        currentFilter: state => state.currentFilter,
        filterMedicine: state => {
            if(state.currentFilter === "")
                return state.list

            return state.list.filter(item => item.name === state.currentFilter)
        }
    }
})

export const { medicines, total, filterMedicine, currentFilter } = medicineSlice.selectors
export const { getAllMedicines, updateFilter, addNewMedicine } = medicineSlice.actions