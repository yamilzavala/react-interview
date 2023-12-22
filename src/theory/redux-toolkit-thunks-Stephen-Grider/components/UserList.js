import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser, deleteUser } from '../store'
import {useThunk} from '../hooks/useThunk'
import Button from './Button'
import UserListItem from './UserListItem';

const UserList = () => {
    //Move rejected and pending state from redux to local state
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const [addUserThunk, isCreatingUsers, creatingUsersError] = useThunk(addUser)
    
    
    //const {data, error, isLoading} = useSelector(state => state.users)    
    const {data} = useSelector(state => state.users)    

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    const handleAddUser = () => {
        addUserThunk()
    }

    let content;    
    if(isLoadingUsers) {
        content = <span>Loading...</span>
    } else if(loadingUsersError) {
        content = <span>Error fetching users...</span>
    } else {
        content = data.map((user, idx) => (<UserListItem key={idx} user={user} />))
    }

    return (
        <div>
            <div>
                <h1>Users</h1>                
                <Button loading={isCreatingUsers} primary onClick={handleAddUser}>+Add User</Button>
                { creatingUsersError && 'Error creating new user...' }                
            </div>
            {content}
        </div>
    );
};

export default UserList;