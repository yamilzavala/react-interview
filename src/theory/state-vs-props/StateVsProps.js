import React, {useState} from 'react';

//state is local and is mutable
//props is global and read only - pass from parent to child

function Child({value}) {
    return <GrandChild value={value}/>
}

function GrandChild({value}) {
    return <div>{value}</div>
}

const StateVsProps = () => {
    const [value, setValue] = useState(1)
    return (
        <Child value={value}/>
    );
};

export default StateVsProps;