import React from 'react';
import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { useThunk } from '../hooks/useThunk';
import { deleteUser } from '../store';

const UserListItem = ({user}) => {
    const [deleteUserThunk, isDeletingUsers, deletingUsersError] = useThunk(deleteUser)

    const handleDelete = (id) => {
        deleteUserThunk(id)
    }

    return (
        <div>
            <Button loading={isDeletingUsers} secondary onClick={() => handleDelete(user.id)}> <GoTrash/> </Button>   
            {deletingUsersError && <div>Error deleting user</div>}            
            {user.id} - {user.name}        
        </div>
    );
};

export default UserListItem;