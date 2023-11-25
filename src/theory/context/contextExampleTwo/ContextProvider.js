import React, {createContext, useState} from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [state, setState] = useState(0);
    const data = {
        state,
        setState
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;