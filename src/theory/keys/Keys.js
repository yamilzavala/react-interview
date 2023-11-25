import React, {useState} from 'react';

let data = [];

for(let i = 1; i < 10; i++) {
    data.push({
        id: 'id'+i,
        num: i
    })
}

const Item = ({num, deleteItem, id}) => {
    return <h1 key={id} onClick={() => deleteItem(id)}>{num}</h1>
}


const Keys = () => {
    const [state, setState] = useState(data)

    const deleteItem = (value) => {
        const newState = state.filter(item => item.id !== value.id);
        setState(newState)
    }   

    return (
        <div>
           {state.map(item => {
            return <Item id={item.id} num={item.num} deleteItem={deleteItem}/>
           })}
        </div>
    );
};

export default Keys;