import React, {useState, useMemo} from 'react';

//useMemo prevent to recalculated the fc again and again; if the input in the fc is equal, the fc is calculated only once

const arr = [1,4,6,2,7,8]

const UseCallback = () => {
    const [state, setState] = useState(1)

    const someFc = () => {
        console.log('working...')
        return Math.max(...arr)
    }

    const useMemoFc = useMemo(someFc, [])
   
    return (
        <div>
            {state}
            <br/>
            <button onClick={() => setState(state + 1)}>+</button>
            <br/>
            {/* {someFc()} */}
            {useMemoFc}
        </div>
    );
};

export default UseCallback;