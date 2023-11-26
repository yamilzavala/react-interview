import useUserCustomHook from './useUserCustomHook'
import {useState, useRef} from 'react'

const AppFcCustomHook = () => {
    const [endpoint, setEndpoint] = useState('users')    
    const items = useUserCustomHook(endpoint)
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEndpoint(inputRef.current.value)
    }

    return (
        <div>
            <h1>Generate data</h1>
            <form>
                <input ref={inputRef} placeholder='choose #users or #comments as a endpoint'/>
                <button onClick={handleSubmit}>Generate</button>
            </form>

            {items.map((item, idx) => <p key={idx}>{item.name}</p>)}
            
        </div>
    );
};

export default AppFcCustomHook;