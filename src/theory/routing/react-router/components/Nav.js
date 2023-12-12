import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;