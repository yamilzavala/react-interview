const Pagination = ({itemsPerPage, totalItems, currentPage, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    const renderedPages = pageNumbers.map(number => (
        <li key={number}>
            <button onClick = {() => paginate(number)}>{number}</button>
        </li>
    ))

    return (
        <ul>
            <li>
                <button onClick={() => paginate(1)}>First</button>
            </li>
            {renderedPages}
            <li>
                <button onClick={() => paginate(pageNumbers.length)}>Last</button>
            </li>
        </ul>
    )
}

export default Pagination;