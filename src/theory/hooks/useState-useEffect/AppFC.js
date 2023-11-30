import {useState, useEffect} from 'react';

export const AppFC = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    return (<>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
    </>)
}