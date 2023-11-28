import {useState, useMemo} from 'react';

const data = [1,2,3,4,5,6,7,8]

const UseMemo = () => {
    const [localState, setLocalState] = useState(1)
    const [dataState, setData] = useState(data);

    const getMax = () => {
        console.log('working...')
        return Math.max(...dataState);
    }

    const changeData = () => {
        setData([4,7,9])
    }

    const memoizeUseMemo = useMemo(() => getMax(),[dataState])

    return (
        <div>
             <button onClick={() => setLocalState(localState + 1)}>Change local state</button> 
             local state: {localState}
             <br/>
             {/* Max value: {getMax()} */}
             Max value: {memoizeUseMemo}
             <button onClick={changeData}>Change data</button> 
        </div>
    );
};

export default UseMemo;