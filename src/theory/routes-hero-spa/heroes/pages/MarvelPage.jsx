import React from 'react';
import { HeroList } from '../components';

export const MarvelPage = () => {
    return (
        <div style={{height: '70vh', width: '100vw', margin: '40px'}}>
            <h1> Marvel Page </h1>
            <HeroList publisher='Marvel Comics'/>        
        </div>
    );
};