import React from 'react';
import style from './ItemDescription.module.css'

const ItemDescription = ({name, description}) => {
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{description}</li>
            </ul>
        </div>
    );
};

export default ItemDescription;