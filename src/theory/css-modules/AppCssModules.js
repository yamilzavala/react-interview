import React from 'react';
import Product from './components/Product';
import style from './AppCssModules.module.css'
import './index.css'

const AppCssModules = () => {
    return (
        <div>
            <h1>Css modules</h1>
            <h2 className={style.error}>Some title</h2>

            <Product name='product 1' description='desc 1' price={10}/>
            <Product name='product 2' description='desc 2' price={20}/>
            <Product name='product 3' description='desc 3' price={40}/>
        </div>
    );
};

export default AppCssModules;