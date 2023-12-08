import {forwardRef} from 'react';

const Button = forwardRef(({children, variant = 'primary', ...props}, ref) => {
    return (
        <button className={`btn btn-${variant}`} {...props}>
            {children}
        </button>
    );
});

export default Button;