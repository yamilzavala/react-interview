import React from 'react';
import style from './Product.module.css'
import ItemDescription from './ItemDescription';

const Product = ({name, price, description}) => {
    return (
        <div className={style.product}>
            <ItemDescription name={name} description={description}/>
            <h2 className={style.error}>An error occurred</h2>
            <h3 className={style.price}>${price}</h3>
        </div>
    );
};

export default Product;