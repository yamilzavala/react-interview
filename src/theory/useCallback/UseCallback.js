import React, {useState, memo, useCallback} from 'react';

//with usecallback we only render the child once time because we pass the function once

const Child = memo((props) => {
    console.log('rendering from child')
    return (
        <div>
            I´m a child
        </div>
    );
});

const UseCallback = () => {
    const [state, setState] = useState(1)

    const someFc = () => {}
    const callbackFc = useCallback(someFc,[])

    return (
        <div>
            {/* <Child fc={someFc}/> */}
            <Child fc={callbackFc}/>
            <br/>
            {state}
            <br/>
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    );
};

export default UseCallback;