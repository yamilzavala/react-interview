import { useFetch } from "../hooks/useFetch";

const Fetch = () => {
    const baseUrl = 'http://localhost:3001/posts';
   const {error, data, loading} = useFetch(baseUrl);

   if(loading) return <h1>Loading...</h1>

   if(error) return <h1>Error...</h1>

   const renderedData = data.map((item, idx) => {
    return (<div key={idx}>
                <h3>{item.title}</h3>
                <p>Id: {item.id}</p>
                <p>Author: {item.author}</p>
            </div>)
   })

    return (
        <div>
            {renderedData}
        </div>
    );
};

export default Fetch;