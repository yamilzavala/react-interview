import {useState, useEffect} from 'react';

const useUserCustomHook = (endpoint) => {
    const [items, setItems] = useState([])

    
    useEffect(()=> {
        const loadData = async () => { 
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            const data = await response.json()
            setItems(data)
        }
        loadData()
    },[endpoint])

    return items;
};

export default useUserCustomHook;