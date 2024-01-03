import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: 'some name',
        cost: 10
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action){
            state.cost = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = '';
        })
    }
})

export const formReducer = formSlice.reducer;
export const {changeCost, changeName} = formSlice.actions;
