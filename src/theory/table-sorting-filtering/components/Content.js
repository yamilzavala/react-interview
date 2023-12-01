import React from 'react';

const Content = ({columns, entries}) => {

    const renderedRows = entries.map((item, idx) => (
        <tr key={idx}>
            {columns.map((column,idxC) => (
                <td className='users-table-cell' key={idxC}>
                    {item[column]}
                </td>
            ))}
        </tr>
    ))

    return (
        <tbody>
            {renderedRows}
        </tbody>
    );
};

export default Content;