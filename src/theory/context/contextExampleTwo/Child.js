import React, {useContext} from 'react';
import {Context} from './ContextProvider'

const Child = () => {
    const {state, setState} = useContext(Context);

    return (
        <div>
            {state}
            <br/>
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    );
};

export default Child;