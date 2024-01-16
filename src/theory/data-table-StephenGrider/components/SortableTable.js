import React, {useState} from 'react';
import Table from './Table';
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
import style from './SortablrTable.module.css'

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const {config, data} = props;
    let sortedData = data; 

    const handleClick = (column) => {
        if(sortBy && sortBy !== column) {
            setSortBy(column)
            setSortOrder('asc')
            return;
        }

        if(sortOrder === null) {
            setSortOrder('asc')
            setSortBy(column)
        } else if(sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(column)
        } else {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    const updatedConfig = config.map(column => {
        if(!column.sortValue) return column;
        
        return {
            ...column,
            header:() => (
                <th onClick={() => handleClick(column.label)}>
                    <div className={style.flexContainer}>
                        {column.label} 
                        {getIcons(column.label, sortBy, sortOrder)}
                    </div>
                </th>)
        } 
    })


    //only sort data if sortBy and sortOrder are not null
    if(sortBy && sortOrder){
        const {sortValue} = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        })        
    }

    return (
        <div>
            <Table {...props} config={updatedConfig} data={sortedData} sortBy={sortBy} sortOrder={sortOrder}/>
        </div>
    );
};

function getIcons(label, sortBy, sortOrder) {
    if(label !== sortBy){
        return <div className={`${style.flexContainerColum} ${style.marginLeft}`}>
            <GoChevronUp/>
            <GoChevronDown/>
        </div>
    }

    if (!sortOrder) {
        return <div className={`${style.flexContainerColum} ${style.marginLeft}`}>
        <GoChevronUp/>
        <GoChevronDown/>
    </div>
    } else if(sortOrder === 'asc'){
        return <GoChevronUp className={style.marginLeft}/>
    } else if(sortOrder === 'desc'){
        return <GoChevronDown className={style.marginLeft}/>
    }
}

export default SortableTable;