import React from 'react';
import { HeroList } from '../components';

export const DcPage = () => {
    return (
        <div style={{height: '70vh', width: '100vw', margin: '40px'}}>
            <h1> Dc Page </h1>
            <HeroList publisher='DC Comics'/>
        </div>
    );
};