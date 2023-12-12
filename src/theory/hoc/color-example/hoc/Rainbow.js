import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'blue', 'green']
    let pickRandomColor = colors[Math.floor(Math.random() * 3)];

    console.log(pickRandomColor)
    return (props) => {
        return (
            <div style={{color: pickRandomColor}}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;