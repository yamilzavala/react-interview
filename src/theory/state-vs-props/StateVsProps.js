import React, {useState} from 'react';

//state is local and is mutable
//props is global and read only - pass from parent to child

function Child({value, changeState}) {
    return <GrandChild value={value} changeState={changeState}/>
}

function GrandChild({value, changeState}) {
    return (
        <div>
            {value}
            <button onClick={() => changeState('new state')}>Change state</button>
        </div>
        )
}

const StateVsProps = () => {
    const [value, setValue] = useState(1)
    return (
        <Child value={value} changeState={setValue}/>
    );
};

export default StateVsProps;