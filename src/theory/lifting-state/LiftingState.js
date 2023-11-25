import React, {useState} from 'react';

//If exist two components siblings that share the same state, define the state in the father and share this with props to the childs

const ItemCount = ({count}) => {    
    return (
        <h1>{count}</h1>
    );
};

const ListItem = ({items}) => {    
    return (
        <div>
            {items.map((item, idx) => {
                return <h1 key={idx}>{item}</h1>
            })}
        </div>
    );
};

const LiftingState = () => {
    const [items, setItems] = useState(['item 1', 'item 2', 'item 3'])
    return (
        <div>
            <ItemCount count={items.length}/>
            <ListItem items={items}/>
        </div>
    );
};

export default LiftingState;