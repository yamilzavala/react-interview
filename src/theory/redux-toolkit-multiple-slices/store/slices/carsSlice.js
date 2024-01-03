import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers:{
        //asumption: action.payload = car.name
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            //asumption: action.payload = {name: 'text', const: 1}
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action){
            //asumption: action.payload = id to remove
            const updated = state.data.filter(car => car.id !== action.payload)
            state.data = updated
        }
    }
})

export const {addCar, removeCar, changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;