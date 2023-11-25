import React, {useState, memo} from 'react';

//memo is used for render the child only if the props changes and not for each render in the parent

const Child = memo((props) => {
    console.log('rendering from child')
    return (
        <div>
            I´m a child
        </div>
    );
});

const Memo = () => {
    const [state, setState] = useState(1)
    return (
        <div>
            <Child/>
            <br/>
            {state}
            <br/>
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    );
};

export default Memo;