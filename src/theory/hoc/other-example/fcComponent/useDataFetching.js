import {useState, useEffect} from 'react'

export const useDataFetching = (url) =>  {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setLoading(false)            
            } catch (error) {
                setLoading(false) 
                setError(true)  
            }
        }
        fetchData();
    },[url])

    return {
        data,
        error,
        loading
    }
}