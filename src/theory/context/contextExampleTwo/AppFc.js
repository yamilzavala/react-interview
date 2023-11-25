import React from 'react';
import Child from './Child';
import ContextProvider from './ContextProvider';

const AppFc = () => {
    return (
        <ContextProvider>
            <Child/>
        </ContextProvider>
    );
};

export default AppFc;