import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ModalPage from './pages/ModalPage';

const AppPortal = () => {
    return (
        <div>
            <Link to='/modal'/>
            <Routes>
                <Route to="/modal" element={<ModalPage/>} />
            </Routes>
        </div>
    );
};

export default AppPortal;