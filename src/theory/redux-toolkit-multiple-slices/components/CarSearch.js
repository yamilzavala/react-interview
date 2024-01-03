import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store'

const CarSearch = () => {
    const dispatch = useDispatch();

    const searchState = useSelector(state => state.cars.searchTerm)
    console.log('searchState: ', searchState)

    return (
        <div>
            <label>Search:</label>
            <input type="text" value={searchState} onChange={e => dispatch(changeSearchTerm(e.target.value))} />
        </div>
    );
};

export default CarSearch;