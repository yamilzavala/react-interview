import React from 'react';
import ButtonPage from './pages/ButtonPage'
import Accordion from './components/Accordion';
import {accordionData} from './data/data'

const AppRepository = () => {
   
    return (
        <>
       
            {/* <ButtonPage/> */}
            <Accordion items={accordionData}/>
        </>
    );
};

export default AppRepository;