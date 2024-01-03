import React from 'react';
import { useSelector } from 'react-redux';

const CarValue = () => {
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        const filteredCars = data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        const total = filteredCars.reduce((acc,curr) => acc + curr.cost, 0)
        return total;
    })

    return (
        <div>
            <p>Total value: ${totalCost}</p>
        </div>
    );
};

export default CarValue;