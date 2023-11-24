import {createContext} from 'react';
const UserTableContext = createContext();

const usersData = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
    { id: 4, name: 'Usuario 4', email: 'usuario4@example.com' },
    { id: 5, name: 'Usuario 5', email: 'usuario5@example.com' },
    { id: 6, name: 'Usuario 6', email: 'usuario6@example.com' },
    { id: 7, name: 'Usuario 7', email: 'usuario7@example.com' },
    { id: 8, name: 'Usuario 8', email: 'usuario8@example.com' },
    { id: 9, name: 'Usuario 9', email: 'usuario9@example.com' },
    { id: 10, name: 'Usuario 10', email: 'usuario10@example.com' },
    { id: 11, name: 'Usuario 11', email: 'usuario11@example.com' },
    { id: 12, name: 'Usuario 12', email: 'usuario12@example.com' }    
  ];

  function TableProvider ({children}) {
    const userTableData = {
        usersData
    }

    return (
        <UserTableContext.Provider value={userTableData}>
            {children}
        </UserTableContext.Provider>
    )
  }

  export {TableProvider}
  export default UserTableContext;