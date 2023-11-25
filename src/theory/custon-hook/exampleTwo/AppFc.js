import React from 'react';
import useData from './useData'

const AppFc = () => {
    const {data, error, loading} = useData();

    if(loading) return <h1>Loading...</h1>

    if(error) return <h1>Error...</h1>
    
    return (
        <div>
            {data.map(user => (<li>{user.name}</li>))}
        </div>
    );
};

export default AppFc;