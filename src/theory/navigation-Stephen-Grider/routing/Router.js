import React from 'react';
import Route from '../components/Route'
import DropDownPage from '../pages/DropDownPage';
import AccordionPage from '../pages/AccordionPage';
import ButtonPage from '../pages/ButtonPage';
import style from './Router.module.css'

const Router = () => {
    return (
        <div className={style.container}>
            <Route path='/'>
                <DropDownPage/>
            </Route>

            <Route path='/accordion'>
                <AccordionPage/>
            </Route>            

            <Route path='/button'>
                <ButtonPage/>
            </Route>
        </div>
    );
};

export default Router;