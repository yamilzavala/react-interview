import Table from './Table';
import style from './SortablrTable.module.css'
import { useSort } from '../hooks/useSort';
import { getIcons } from '../helper/getIcons';

const SortableTable = (props) => {    
    const {config, data} = props;
    const {setSortColumn, sortBy, sortOrder, sortedData} = useSort(data, config)
     

    const updatedConfig = config.map(column => {
        if(!column.sortValue) return column;
        
        return {
            ...column,
            header:() => (
                <th onClick={() => setSortColumn(column.label)}>
                    <div className={style.flexContainer}>
                        {column.label} 
                        {getIcons(column.label, sortBy, sortOrder)}
                    </div>
                </th>)
        } 
    })

    return (
        <div>
            <Table {...props} config={updatedConfig} data={sortedData} sortBy={sortBy} sortOrder={sortOrder}/>
        </div>
    );
};



export default SortableTable;