import {memo} from 'react';

const Child = ({state, setChildState}) => {
    console.log('Rendering from child...')

    const handleChildState = () => {
        setChildState(Math.random())
    }

    return (
        <div>
            child state: {state}
            <button onClick={handleChildState}>Change child state</button>
        </div>
    );
};

export default memo(Child);