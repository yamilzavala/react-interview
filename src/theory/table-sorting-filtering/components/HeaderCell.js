import React from 'react';

const HeaderCell = ({column, sorting, id, setNewSorting}) => {
    const isDescSorting = sorting.column === column && sorting.order === 'desc';
    const isAscSorting = sorting.column === column && sorting.order === 'asc';
    const futureSorting = isDescSorting ? 'asc' : 'desc';

    return (
       <th className='users-table-cell' key={id} onClick={() => setNewSorting({column, order: futureSorting})}>
            {column}
            {isDescSorting && <span>🡳</span>}
            {isAscSorting && <span>🡱</span>}            
       </th>
    );
};

export default HeaderCell;