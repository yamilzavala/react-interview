import {useState} from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './connect-mapper';

const AppReduxConnect = (props) => {
    const [user, setUser] = useState('');

    //dispatch
    const handleAddUser = () => {
        // props.dispatch({type: 'ADD_USER',payload: user})
        // props.dispatch(props.addUser(user))
        // setUser('')

        props.addUser(user)
    }

    const usersRendered = props.users.map((user, idx) =>(
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



export default connect(mapStateToProps, mapDispatchToProps)(AppReduxConnect);