import React, {useState, useRef} from 'react';

//controlled components are that who handle the values by a state
//uncontrolled components are that who handle the values by a ref

const Controlled = () => {
    const [state, setState] = useState('')

    const showValue = () => alert(state)

    return (
        <div>
            <input
            value={state} 
            onChange={e => setState(e.target.value)}/>

            <button onClick={showValue}>Click me</button>
        </div>
    );
};

const Uncontrolled = () => {
    const inputRef = useRef() 

    const showValue = () => alert(inputRef.current.value)

    return (
        <div>
            <input type='text' ref={inputRef}/>
            <button onClick={showValue}>Click me</button>
        </div>
    );
};

const ControlledVsUncontrolled = () => {
    return (
        <div>
            <Controlled/>
            <Uncontrolled/>
        </div>
    );
};

export default ControlledVsUncontrolled;