import React from 'react';
import {Nav, Home, About, Contact} from './components';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Post';

const AppReactRouter = () => {
    return (
       
            <div>
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path='/:post_id' element={<Post/>}/>
                </Routes>
                
            </div>        
    )
};

export default AppReactRouter;