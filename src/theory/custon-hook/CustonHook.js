import React, {useState, useRef, useEffect} from 'react';

const useHovered = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null);

    const handleMouseOver = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    useEffect(() => {
        const node = ref.current;
        if(node) {
            node.addEventListener('mouseover', handleMouseOver)
            node.addEventListener('mouseout', handleMouseLeave)

            return () => {
                node.removeEventListener('mouseover', handleMouseOver)
                node.removeEventListener('mouseout', handleMouseLeave)
            }
        }
    }, [])

    return [ref, hovered]
};

const AppFc = () => {
    const [ref, hovered] = useHovered()

    const style = {
        backgroundColor: hovered ? 'red' : ''
    }

    return (
        <div style={style} ref={ref}>
            <h1>Custom hooks</h1>
        </div>
    );
};

export default AppFc;