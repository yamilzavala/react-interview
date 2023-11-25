import React, {useReducer} from 'react';

//useReducer to hadle state with acions and reducers like redux but with a hook

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': 
            return {
                ...state,
                count: state.count + 1
            }
        case 'SUBTRACT':
            return {
                ...state,
                count: state.count -1
            }
        case 'RESET':
           return initialState;
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const add = () => dispatch({type: 'ADD'})
    const subtract = () => dispatch({type: 'SUBTRACT'})
    const reset = () => dispatch({type: 'RESET'})

    return (
        <div>
            {state}
            <br/>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default UseReducer;