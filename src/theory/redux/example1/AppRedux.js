import {useState} from 'react';
import { user_store } from './store';

const AppRedux = (props) => {
    const [user, setUser] = useState('');

    //dispatch
    const handleAddUser = () => {
        user_store.dispatch({type: 'ADD_USER',payload: user})
        setUser('')
    }

    const usersRendered = user_store.getState().map((user, idx) =>(
        <li key={idx}>{user}</li>
    ))

    console.log('props: ',props)

    return (
        <div>
            <input 
                type='text' 
                placeholder='Add a user'
                value={user}
                onChange={e => setUser(e.target.value)}/>

            <button onClick={handleAddUser}>Add user!</button>

            <div>
                <h2>Users</h2>
                <ul>
                    {usersRendered}
                </ul>
            </div>
        </div>
    );
};



export default AppRedux;