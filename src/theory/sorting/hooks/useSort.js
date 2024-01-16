import { useState } from "react";

export const useSort = (data, config) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    let sortedData = data;

    const setSortColumn = (column) => {
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

    return {
        setSortColumn,
        sortBy,
        sortOrder,
        sortedData
    }

}

