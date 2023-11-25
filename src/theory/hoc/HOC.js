import React, {useState} from 'react';

//Is a component that recive other component as a parameter and add functionality to this

function DetectHover(Component) {
    const [state, setState] = useState(false);

    return () => {
        <div onMouseOver = {() => setState(true)}
             onMouseLeave = {() => setState(false)}>
            <Component hovered={state} /> 
        </div>
    } 
}

const HOC = ({hovered}) => {
    const style = {
        backgroundColor: hovered ? 'red' : ''
    }
    return (
        <div style={style}>
            <h1>HOC Components</h1>
        </div>
    );
};

export default DetectHover(HOC);