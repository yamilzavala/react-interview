import React, {useRef, useEffect} from 'react';

//handle the real dom with a ref

const UseRef = () => {
    const inputRef = useRef();

    useEffect(() => {inputRef.current.focus()}, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
};

export default UseRef;