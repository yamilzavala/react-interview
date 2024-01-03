import React from 'react';
import {addCar, changeCost, changeName} from '../store'
import { useDispatch, useSelector } from 'react-redux';

const CarForm = () => {
   
    const dispath = useDispatch()
    const {name, cost} = useSelector((state) => state.form)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispath(addCar({
            name,
            cost
        }))
        dispath(changeName(''))
        dispath(changeCost(''))
    }

    const handleChangeName = (e) => {
        dispath(changeName(e.target.value))
    }

    const handleChangeCost = (e) => {
        dispath(changeCost(parseInt(e.target.value)))
    }

    console.log(name, cost)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input placeholder='car name' type='text' value={name} onChange={handleChangeName}/>

                <label>Cost:</label>
                <input placeholder='car value' type='number' value={cost} onChange={handleChangeCost}/>
                <button type='submit' >submit</button>
            </form>
        </div>
    );
};

export default CarForm;