import {createContext, useState} from 'react';
const UsersContext = createContext();

const users = [
    {id: 1, name: 'admin', photo: 'admin'},
    {id: 2, name: 'user', photo: 'user'},
]

function UserProvider({children}) {
    const [theme, setTheme] = useState('dark');

    const handleTheme = (color) => {
        setTheme(color)
    }

    const userData = {
        users,
        theme,
        handleTheme
    }

    return (
        <UsersContext.Provider value={userData}>
            {children}
        </UsersContext.Provider>
    )
}

export {UserProvider};
export default UsersContext;