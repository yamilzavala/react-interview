import {useFetch} from './useFetch';

const AppUseFetch = () => {
    const {error, isLoading, data} = useFetch('https://jsonplaceholder.typicode.com/users');

    const renderedData = data.map((item, idx) => (
        <div key={idx}>
            {item.id} - {item.name}
        </div>
    ))

    if(error) return <div>Error...</div>
    if(isLoading) return <div>Loading...</div>

    return (
        <div>
            <h1>Custom hook</h1>
            {renderedData}
        </div>
    );
};

export default AppUseFetch;