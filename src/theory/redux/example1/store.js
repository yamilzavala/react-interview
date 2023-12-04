import {createStore} from 'redux'
import user_reducer from './reducer'

//store
export const user_store = createStore(user_reducer)

