import { configureStore } from "@reduxjs/toolkit";
import {userReducers} from './slices/usersSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";


export const store = configureStore({
    reducer: {
        users: userReducers,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware)
    }
})

setupListeners(store.dispatch)

export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/deleteUser'
export {useFetchAlbumsQuery, useAddAlbumMutation} from "./apis/albumsApi";