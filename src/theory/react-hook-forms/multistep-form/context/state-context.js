import {useState, useContext, createContext} from 'react';

export const AppStateContext = createContext({});

export const AppProvider = ({children}) => {
    const value = useState({});

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    )
}