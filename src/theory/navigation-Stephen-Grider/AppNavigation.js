import React from 'react';
import Sidebar from './components/Sidebar';
import Router from './routing/Router';
import style from './AppNavigation.module.css'

const AppNavigation = () => {
    return (
        <div className={style.mainContainer}>
           <Sidebar/>
           <Router/>            
        </div>
    );
};

export default AppNavigation;