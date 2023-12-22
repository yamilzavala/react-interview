import { configureStore } from "@reduxjs/toolkit";
import {userReducers} from './slices/usersSlice'

export const store = configureStore({
    reducer: {
        users: userReducers
    }
})

export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/deleteUser'