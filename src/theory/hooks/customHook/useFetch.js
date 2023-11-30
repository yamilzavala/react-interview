import {useEffect, useState} from 'react';
import axios from 'axios';

export const useFetch = (baseUrl) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {        
        axios.get(baseUrl).then(res => {
            setIsLoading(false)
            setData(res.data)
        }).catch(() => {
            setError(true)
            setIsLoading(false)
        });
    }, [baseUrl])

    return {
        error,
        isLoading,
        data
    }
}