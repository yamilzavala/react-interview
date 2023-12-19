import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';

const CreateUser = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')

    useEffect(() => {
        getUsers();
    },[])

    const renderedUsers = users?.map(user => (
        <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}> Delete </button>
        </li>
    ))

    const getUsers = async () => {
        try {
            const res = await axios.get('http://localhost:3001/users');
            setUsers(res.data);
        } catch(e) {
            alert(e)
        }
    }

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3001/users/${id}`)
            getUsers()
        } catch (err) {
            alert(err)
        }
    }

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            name,
            author: 'test'
        }
            try {
                await axios.post('http://localhost:3001/users', {...newUser})
                getUsers();
                setName('')            
            } catch (error) {
                alert(error)
            }              
    }

    return (
        <div>
            <h1>Create User</h1>
                      
            {renderedUsers}            

            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                </form>
            </div>

        </div>
    );
};

export default CreateUser;