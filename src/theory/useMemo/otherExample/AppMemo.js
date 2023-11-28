import Child from './Child';
import {useState} from 'react';

const AppMemo = () => {
    const [localState, setLocalState] = useState(1)
    const [childState, setChildState] = useState(0)

    return (
        <div>
            <Child state={childState}/>       
            <button onClick={() => setLocalState(localState + 1)}>Change local state</button> 
            local state: {localState}
        </div>
    );
};

export default AppMemo;