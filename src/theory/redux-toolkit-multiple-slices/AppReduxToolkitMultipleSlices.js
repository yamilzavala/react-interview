import React from 'react';

import CarForm from './components/CarForm'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'
import CarList from './components/CarList';


const AppReduxToolkitMultipleSlices = () => {
    return (
        <div>
           <CarForm /> 
           <CarSearch/>
           <CarList/>
           <CarValue/>
        </div>
    );
}

export default AppReduxToolkitMultipleSlices;