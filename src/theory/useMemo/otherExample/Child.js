import {memo} from 'react';

const Child = ({state}) => {
    console.log('Rendering from child...')

    return (
        <div>
            child state: {state}
        </div>
    );
};

export default memo(Child);