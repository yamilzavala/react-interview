import { useCounter } from "../hooks/useCounter";


const DemoComponent = ({initialValue}) => {
    const {count, increment} = useCounter(initialValue)

    return (
        <div>
            Count is: {count}
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default DemoComponent;