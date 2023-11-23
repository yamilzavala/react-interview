import React, {useState} from 'react';

const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({username, password})
        setUsername('')
        setPassword('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                type="text"/>
            </label>
            <br/>

            <label>Password:
                <input
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                type="text"/>
            </label>
            <br/>

            <button type="submit">Login!</button>
        </form>
    )
}

export default LoginForm;