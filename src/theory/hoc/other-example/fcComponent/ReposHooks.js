import {useDataFetching} from './useDataFetching'

const ReposHooks = () => {
    const {data, error, loading} = useDataFetching('https://api.github.com/users/monsterlessonsacademy/repos');

    if(error) return <div>Error...</div> 
    if(loading) return <div>Loading...</div> 

    const renderedItems = () => {
        return (
            <ul>
                {data.map(({id, html_url, full_name}) => (
                    <li key={id}>
                        <a href={html_url} target="_blank">{full_name}</a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            {renderedItems()}
        </div>
    )
}

export default ReposHooks;