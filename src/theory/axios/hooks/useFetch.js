import {useState, useEffect} from 'react'
import axios from 'axios'

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {           
            axios.get(url).then(res => {
            setData(res.data)
            setLoading(false)           
        })
        } catch (error) {
            setLoading(false)
            setError(true)
        }        
    },[url])

    return {
        loading,
        error,
        data
    }
}