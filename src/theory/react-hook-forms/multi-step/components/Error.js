import React from 'react';

const Error = ({message}) => {
    const style = {
        color: 'red'
    }

    return (
        <div style={style}>
            {message}
        </div>
    );
};

export default Error;