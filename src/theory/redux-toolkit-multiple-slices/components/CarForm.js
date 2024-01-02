import React, {useState} from 'react';
import {addCar, changeCost, changeName} from '../store'
import { useDispatch, useSelector } from 'react-redux';

const CarForm = () => {
   
    const dispath = useDispatch()
    const {name, cost} = useSelector(state => state)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispath(addCar({
            name: name,
            cost: cost
        }))
    }

    console.log(name, cost)

    return (
        <div>
            CarForm
            <form onSubmit={handleSubmit}>
                <input placeholder='car name' type='text' value={name} onChange={e => changeName(e.target.value)}/>
                <input placeholder='car value' type='text' value={cost} onChange={e => changeCost(e.target.value)}/>
                <button type='submit' >submit</button>
            </form>
        </div>
    );
};

export default CarForm;