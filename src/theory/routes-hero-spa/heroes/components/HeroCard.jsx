import React from 'react';
import { Link } from 'react-router-dom';

const CaractersByHero = ({alter_ego, characters}) => {
    return (alter_ego === characters) 
     ? <></>
     : <p>{characters}</p>
}

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`

    return (
        <div className='col' style={{padding: '10px', margin: '10px', width: '400px'}}>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={heroImageUrl} className='card-img' alt={superhero} />
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            <CaractersByHero characters={characters} alter_ego={alter_ego} />
                            <Link to={`/hero/${id}`}>More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};