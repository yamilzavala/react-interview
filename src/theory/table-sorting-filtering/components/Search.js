import {useState} from 'react';

const Search = ({searchTable}) => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchTable(searchText)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Enter a filter'
                type='text'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} />
        </form>
    );
};

export default Search;