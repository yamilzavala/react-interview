const Error = ({field}) => {
    const style = {
        color:'tomato', 
        fontSize:'small', 
        marginLeft: '10px'
    }
    
    return (
        <span style={style}>
            {field} required
        </span>
    );
};

export default Error;