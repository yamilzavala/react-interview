import {forwardRef} from 'react';

const Input = forwardRef(({ ...props}, ref) => {
    return (
        <input ref={ref} className='form-control' {...props}/>
    );
});

export default Input;