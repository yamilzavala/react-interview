import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers:{
        changeSearchTerm(state, action){
            state.cars = state.cars.filter(car => car.name === action.payload)
        },
        addCar(state, action){
            //asumption: action.payload = {name: 'text', const: 1}
            state.cars.push({
                name: action.payload.name,
                const: action.payload.cost,
                id: nanoid()
            })
        },
        removeCard(state, action){
            //asumption: action.payload = id to remove
            const idx = state.indexOf(action.payload)
            state.cars.splice(idx, 1)
        }
    }
})

export const {addCar, removeCar, changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;