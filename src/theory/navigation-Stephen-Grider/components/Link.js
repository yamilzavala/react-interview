import React from 'react';
import useNavigationContext from '../hook/useNavigationContext'
import style from './Link.module.css'

const Link = ({to, children}) => {

    const {navigate, currentPath} = useNavigationContext()

    const handleClick = (e) => {
        if(e.metaKey || e.ctrlKey){
            return
        }

        e.preventDefault();
        navigate(to)
    }

    const isActive = currentPath === to;

    return (
       <a className={isActive ? style.isActive : ''} href={to} onClick={handleClick}>{children}</a>
    );
};

export default Link;