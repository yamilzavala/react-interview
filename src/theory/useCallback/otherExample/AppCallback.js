import Child from './Child';
import {useState, useCallback} from 'react';

const AppCallback = () => {
    const [localState, setLocalState] = useState(1)
    const [childState, setChildState] = useState(0)

    const memoizedCallback = useCallback(number => changeChildState(number),[])
    const changeChildState = (value) => setChildState(value);

    return (
        <div>
            {/* <Child state={childState} setChildState={changeChildState}/>        */}
            <Child state={childState} setChildState={memoizedCallback}/>       
            <button onClick={() => setLocalState(localState + 1)}>Change local state</button> 
            local state: {localState}
        </div>
    );
};

export default AppCallback;