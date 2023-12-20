import { configureStore } from "@reduxjs/toolkit";
import { songReducers, addSong, removeSong } from "./slices/songSlice";
import { moviesReducers, addMovie, removeMovie } from "./slices/movieSlice";
import {reset} from './actions'

const store = configureStore({
    reducer: {
        songs: songReducers,
        movies: moviesReducers
    }
})



export { store, addSong, removeSong, addMovie, removeMovie, reset }

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'new song!'
// })

// store.dispatch(
//     songsSlice.actions.addSong('some songs')
// )

// console.log('starting state: ', store.getState())
// console.log('store: ', store)
// console.log('actionsCreators: ', songsSlice.actions)

