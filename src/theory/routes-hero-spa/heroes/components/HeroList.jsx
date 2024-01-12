import React from 'react';
import { getHeroByPubisher } from '../helpers/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const renderedHeroes = getHeroByPubisher(publisher).map((hero,idx) => (
        <HeroCard key={idx} {...hero}/>
    ))

    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {renderedHeroes}
            </div>
        </>
    );
};