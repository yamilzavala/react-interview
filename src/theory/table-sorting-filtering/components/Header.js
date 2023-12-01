import React from 'react';
import HeaderCell from './HeaderCell';

const Header = ({columns, sorting, setNewSorting}) => {
    const renderedCells = columns.map((column, idx) => (
        <HeaderCell id={idx} column={column} sorting={sorting} setNewSorting={setNewSorting}/>
    ))

    return (
       <thead>
            <tr>
               {renderedCells} 
            </tr>
       </thead>
    );
};

export default Header;