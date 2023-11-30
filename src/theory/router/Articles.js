import { useParams, useSearchParams } from "react-router-dom";

const Articles = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()
    console.log('params: ',params)
    console.log('query params: ',searchParams.get('page'), searchParams.get('user'))

    return (
        <div>
            <h1>Articles</h1>
        </div>
    );
};

export default Articles;