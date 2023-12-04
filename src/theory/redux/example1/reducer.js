const initialState = [];

//reducer
const user_reducer = (state = initialState, action) => {
    console.log('Reducer: ', state, action)
    switch(action.type) {
        case 'ADD_USER': {
            return [
                ...state,
                action.payload
            ]
        }
        default: 
            return state
    }   
}

export default user_reducer;