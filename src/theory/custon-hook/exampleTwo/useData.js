import {useState, useEffect} from 'react';

const useData = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setData(data)
                setLoading(false)
            } catch(e) {
                setError(true)
                setLoading(false)
            }
        }
        load();
    }, [])

    return {
        data,
        error,
        loading
    }
};

export default useData;