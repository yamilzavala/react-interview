import {useState} from 'react';
import { useFetch } from './hooks/useFetch';
import Header from './components/Header';
import {columnsConfig} from './config/columns'
import Search from './components/Search';
import './index.css'
import Content from './components/Content';

const AppTable = () => {
    const [sorting, setSorting] = useState({column: 'id', order: 'asc'})
    const [searchValue, setSeachValue] = useState('')
    const {error, isLoading, data} = useFetch(`http://localhost:3001/users?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`, sorting, searchValue);
    
    const setNewSorting = (newSorting) => setSorting(newSorting);

    const searchTable = (newSearchValue) => {
        setSeachValue(newSearchValue)
    }

    if(error) return <div>Error...</div>
    if(isLoading) return <div>Loading...</div>

    return (
        <div>
            <h1>Table - sorting - filtering</h1>

            <Search searchTable={searchTable} />
            <table className='users-table'>
                <Header columns={columnsConfig} sorting={sorting} setNewSorting={setNewSorting}/>
                <Content columns={columnsConfig} entries={data}/>
            </table>
        </div>
    );
};

export default AppTable;