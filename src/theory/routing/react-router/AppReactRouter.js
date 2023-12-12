import React from 'react';
import {Nav, Home, About, Contact} from './components';
import { Route, Routes } from 'react-router-dom';

const AppReactRouter = () => {
    return (
       
            <div>
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
                
            </div>        
    )
};

export default AppReactRouter;