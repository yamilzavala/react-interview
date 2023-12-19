import React from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import CreateUser from './components/CreateUser';



const AppHttp = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                {/* <Route exact path='/' element={<NoteList/>}/> */}
                {/* <Route path='/edit/:id' element={<CreateNote/>}/> */}
                {/* <Route path='/create' element={<CreateNote/>}/> */}
                <Route path='/user' element={<CreateUser/>}/>
            </Routes>
        </div>
    );
};

export default AppHttp;