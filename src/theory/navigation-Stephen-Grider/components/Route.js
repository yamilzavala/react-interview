import React from 'react';
import useNavigationContext from '../hook/useNavigationContext';

const Route = ({path, children}) => {
    const {currentPath} = useNavigationContext();

    if(currentPath === path) return children;

    return null;
};

export default Route;