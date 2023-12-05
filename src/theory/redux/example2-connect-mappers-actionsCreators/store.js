import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import user_reducer from './reducer'

//store
export const user_store = createStore(user_reducer, applyMiddleware(thunk))

