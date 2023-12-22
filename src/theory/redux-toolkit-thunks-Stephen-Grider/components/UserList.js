import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser, deleteUser } from '../store'
import {useThunk} from '../hooks/useThunk'
import Button from './Button'

const UserList = () => {
    //Move rejected and pending state from redux to local state
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const [addUserThunk, isCreatingUsers, creatingUsersError] = useThunk(addUser)
    const [deleteUserThunk, isDeletingUsers, deletingUsersError] = useThunk(deleteUser)
    
    //const {data, error, isLoading} = useSelector(state => state.users)    
    const {data} = useSelector(state => state.users)    

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    const handleAddUser = () => {
        addUserThunk()
    }
    
    const handleDelete = (id) => {
        deleteUserThunk(id)
    }


    if(isLoadingUsers) return <span>Loading...</span>

    if(loadingUsersError) return <span>Error fetching users...</span>

    const renderedUsers = data.map((user, idx) => (
        <div key={idx}>
            {user.id} - {user.name}    

            {
                isDeletingUsers
                ? 'Deleting user...'
                : <Button secondary onClick={() => handleDelete(user.id)}> X </Button>
            }       
                      
            {deletingUsersError && 'Error deleting user'} 
        </div>
    ))

    return (
        <div>
            <div>
                <h1>Users</h1>
                {
                    isCreatingUsers 
                    ? 'Creating user...'  
                    : <Button primary onClick={handleAddUser}>+Add User</Button>
                }

                { creatingUsersError && 'Error creating new user...' }
                
            </div>
            {renderedUsers}
        </div>
    );
};

export default UserList;