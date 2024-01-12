import React from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
    const navigate = useNavigate();

    const {id, ...rest} = useParams();
    console.log('rest: ', rest)

    const hero = getHeroById(id);

    if(!hero) return <Navigate to='/marvel' />

    const heroImgUrl = `/assets/heroes/${id}.jpg`

    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img className='img-thumbnail' src={heroImgUrl} alt={hero.superhero} />
            </div>

            <div className='col-8'>
                <h3>{hero.superhero}</h3>
                
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b> {hero.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b> {hero.publisher}</li>
                    <li className='list-group-item'><b>First appearance: </b> {hero.first_appearance}</li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{hero.characters}</p>

                <button className='btn btn-outline-primary' onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
};
