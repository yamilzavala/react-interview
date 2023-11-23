import React from "react";
import './User.css';
import useUserContext from "../../hooks/use-user-context";
import user from '../../img/user.jpg'
import admin from '../../img/admin.jpg'

const User = () => {
    const {users, theme, handleTheme} = useUserContext();


    const getStyles = () => {
        return {
            container: {
                backgroundColor: theme === 'dark' ? "#000" : "#fff",
                color: theme === 'dark' ? "#fff" : "#000",
                padding: '25px',                
            },
            card: {
                margin: '10px',
                padding: '10px',
                border: theme === 'dark' ? '1px solid #fff' : '1px solid #000',
                textAlign: 'center'
            }
        }
    }

    const renderedUsers = users.map(userData => {  
        const userImg = userData.photo === 'admin' ? admin : user;      
        return (
            <div key={userData.id} style={getStyles().card}>
                <img src={userImg} alt='photo' />
                <p>{userData.name}</p>
            </div>
            )
    })

    return (
        <div style={getStyles().container}>
            <div className="container-btn">
                <button onClick={() => handleTheme('dark')}>Dark Theme</button>
                <button onClick={() => handleTheme('light')}>Light Theme</button>
            </div>
            <h1>Users</h1>
            {renderedUsers}
        </div>
    )
}

export default User;