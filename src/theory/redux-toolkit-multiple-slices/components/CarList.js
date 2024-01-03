import React from 'react';
import {removeCar} from '../store'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import style from './CardList.module.css'

const CarList = () => {
    const dispatch = useDispatch()

    const {name} = useSelector(state => state.form)

    const cars = useSelector(({cars: {data, searchTerm}}) => {
        return data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    })

    console.log('cars:', cars)

    const handleRemoveCar = (id) => {
        dispatch(removeCar(id))
    }

    const renderedCards = cars.map((car, idx) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
      return (<div className={`${bold && style.boldText}`} key={idx}>
            <p>{car.name} - ${car.cost}</p>
            <button onClick={() => handleRemoveCar(car.id)}>X</button>
        </div>)
    })

    return (
        <div>
            {renderedCards}
        </div>
    );
};

export default CarList;