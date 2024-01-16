import {useState, useEffect} from 'react'

export const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue)

    useEffect(() => {
        console.log(count)
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }

    return {
        increment,
        count
    }
}

